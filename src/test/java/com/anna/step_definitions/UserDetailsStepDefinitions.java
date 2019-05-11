package com.anna.step_definitions;

import com.anna.pages.HomePage;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import java.util.Map;

public class UserDetailsStepDefinitions {

    @Then("user should see the informations:")
    public void user_should_see_the_informations(Map<String,String> names) {

        HomePage homePage = new HomePage();

        System.out.println(homePage.userName.getText());
        System.out.println(names);

        for (String name : names.keySet()) {
            Assert.assertEquals(names.get(name),homePage.userName.getText());
        }
    }
}
