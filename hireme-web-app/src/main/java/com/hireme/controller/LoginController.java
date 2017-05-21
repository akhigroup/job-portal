package com.hireme.controller;

import javax.validation.Valid;

import com.hireme.service.model.UserModel;
import com.hireme.service.util.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.User;
import com.hireme.service.UserService;

@Controller
public class LoginController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = {"/", "/login"}, method = RequestMethod.GET)
    public ModelAndView login() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");
        return modelAndView;
    }


    @RequestMapping(value = "/registration", method = RequestMethod.GET)
    public ModelAndView registration() {
        ModelAndView modelAndView = new ModelAndView();
        UserModel userModel = new UserModel();
        modelAndView.addObject("userModel", userModel);
        modelAndView.setViewName("registration");
        return modelAndView;
    }

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public ModelAndView createNewUser(@Valid UserModel userModel, BindingResult bindingResult) {
        ModelAndView modelAndView = new ModelAndView();
        User userExists;
        try {
            userExists = userService.getUser(userModel.getEmail());
        } catch (BusinessException e) {
            // TODO Auto-generated catch block
            userExists = null;
            e.printStackTrace();
        }
        if (userExists != null) {
            bindingResult
                    .rejectValue("email", "error.user",
                            "There is already a user registered with the email provided");
        }
        if (bindingResult.hasErrors()) {
            modelAndView.setViewName("registration");
        } else {
            try {
                User newUser = ServiceUtil.getUser(userModel);
                userService.createUser(newUser, userModel.getRole());
            } catch (BusinessException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            modelAndView.addObject("successMessage", "User has been registered successfully");
            modelAndView.addObject("user", new User());
            modelAndView.setViewName("registration");

        }

        return modelAndView;
    }

    @RequestMapping(value = "/admin/home", method = RequestMethod.GET)
    public ModelAndView homeAdmin() {
        ModelAndView modelAndView = new ModelAndView();

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user;
        try {
            user = userService.getUser(auth.getName());
            modelAndView.addObject("userName", "Welcome (" + user.getEmail() + ")");
            modelAndView.addObject("adminMessage", "Content Available Only for Users with Admin Role");
            modelAndView.setViewName("admin/home");
        } catch (BusinessException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return modelAndView;
    }

    @RequestMapping(value = "/jobseeker/jobseeker", method = RequestMethod.GET)
    public ModelAndView homeJobseeker() {
        ModelAndView modelAndView = new ModelAndView();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user;
        try {
            user = userService.getUser(auth.getName());
            modelAndView.addObject("userId", user.getId());
            modelAndView.setViewName("/jobseeker/jobseeker");
        } catch (BusinessException e) {
               // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return modelAndView;
    }

    @RequestMapping(value = "/company/company", method = RequestMethod.GET)
    public ModelAndView homeCompany() {
        ModelAndView modelAndView = new ModelAndView();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user;
        try {
            user = userService.getUser(auth.getName());
            modelAndView.addObject("userId", user.getId());
            modelAndView.setViewName("company/company");
        } catch (BusinessException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return modelAndView;
    }


}