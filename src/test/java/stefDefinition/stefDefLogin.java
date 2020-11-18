package stefDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class stefDefLogin {

	public WebDriver driver;
	@Given("^User launches URL$")
	public void user_is_on_home_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\AnandMB\\Desktop\\NT\\Anand's\\testCucumber\\src\\test\\resources\\executables\\chromedriver.exe");
	   driver=new ChromeDriver();
		driver.get("https://www.calculator.net/");
	}
	
	@And("^User validate the Tittle of the current page$")
	public void Tittle_of_the_current_page() throws Throwable {
	 System.out.println("Title of the page is:" +driver.getTitle());
	 }
	
@And("^User click on BMI Calculator$")
public void I_click() throws Throwable{
	driver.findElement(By.xpath("//a[contains(text(),'BMI Calculator')]")).click();
}

@Then("^User verify the Title of the Page again$")
public void i_verify_the_Title_of_the_Page_again() throws Throwable {
	System.out.println("Title of the page is:" +driver.getTitle());
}

@Then("^User enters Age as \"([^\"]*)\"$")
public void i_Enter_Age_as(String Age) throws Throwable {
	driver.findElement(By.id("cage")).clear();
	driver.findElement(By.id("cage")).sendKeys(Age);
}
@And("^User enters height as \"([^\"]*)\"$")
public void enter_Height(String Height) throws Throwable {
	driver.findElement(By.id("cheightmeter")).clear();
	driver.findElement(By.id("cheightmeter")).sendKeys(Height);
}
@And("^User enters weight as \"([^\"]*)\"$")
public void enter_weight(String Weight) throws Throwable {
	 driver.findElement(By.id("ckg")).clear();
	driver.findElement(By.id("ckg")).sendKeys(Weight);
}
@Then("^User taps on Calulate BMI$")
public void tap_on_Calulate_BMI() throws Throwable {
    driver.findElement(By.xpath("//input[@type='image']")).click();
}

@Then("^User capture the BMI Result value & Print it$")
public void capture_the_BMI_Result_value_Print_it() throws Throwable {
 
	System.out.println(driver.findElement(By.xpath("//div[@class='bigtext']")).getText());
}

@Then("^User close the browser$")
public void close_the_browser() throws Throwable {
driver.quit();  
}



}
