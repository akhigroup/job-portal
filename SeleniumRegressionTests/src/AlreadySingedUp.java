import static org.junit.Assert.*;

import java.awt.RenderingHints.Key;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.gargoylesoftware.htmlunit.javascript.host.Console;

public class AlreadySingedUp {

	
	  private static WebDriver driver;

	    @BeforeClass
	    public static void setUp() throws IOException {
	        System.setProperty("webdriver.gecko.driver", "C:\\Geckodriver\\geckodriver.exe");
	        driver = new FirefoxDriver();
	        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	        driver.manage().window().maximize();
	   
	    }
	    
	    @Test
	    public void login() throws InterruptedException
	    {
			driver.get("http://localhost:8080/");
			driver.manage().window().maximize();
			WebDriverWait wait = new WebDriverWait(driver,10);
			driver.findElement(By.xpath("html/body/form/button")).click();
			driver.findElement(By.xpath(".//*[@id='email']")).sendKeys("sukesh.saurabh@gmail.com"); //Put an existing ID here
			driver.findElement(By.xpath(".//*[@id='password']")).sendKeys("anypassword");
			driver.findElement(By.xpath("html/body/div[1]/div/div/form/div[4]/div/button")).click();
			WebDriverWait wait2 = new WebDriverWait(driver,10);
			String result = driver.findElement(By.xpath("html/body/div[1]/div/div/form/div[1]/div/label")).getText();
			assertEquals(result,"There is already a user registered with the email provided");
	    	
	    }
	    
	    @AfterClass
	    public static void clousreActivities() {

	        driver.close();
	    }

}