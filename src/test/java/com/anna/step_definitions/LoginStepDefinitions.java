package com.anna.step_definitions;

import com.anna.pages.HomePage;
import com.anna.pages.SignInPage;
import com.anna.utilities.BrowserUtilities;
import com.anna.utilities.ConfigurationReader;
import com.anna.utilities.Driver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

import static org.hamcrest.MatcherAssert.assertThat;

public class LoginStepDefinitions {

    @Given("user on the login page")
    public void user_on_the_login_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }

    @When("user logs in using {string} and {string}")
    public void user_logs_in_using_and(String username, String password) {
        SignInPage signInPage = new SignInPage();
        signInPage.login(username,password);

        HomePage homePage = new HomePage();
        BrowserUtilities.waitForVisibility(homePage.userName,5);

    }

    @Then("homepage should be displayed")
    public void homepage_should_be_displayed() {

    }

    @Then("title should be {string}")
    public void title_should_be(String title) {
        HomePage homePage = new HomePage();
       Driver.getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
       String actualTitle = homePage.appLogo.getText();
        System.out.println(actualTitle);
        Assert.assertEquals(actualTitle,title);
    }

    @Then("there should be {int} menu options")
    public void there_should_be_menu_options(Integer int1) {
        HomePage homePage = new HomePage();
        Integer actualSize = homePage.menu.size();
        Assert.assertEquals(int1,actualSize);
    }
}
