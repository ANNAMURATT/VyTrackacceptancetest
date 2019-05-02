package com.anna.step_definitions;

import com.anna.pages.HomePage;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;

public class HomePageMenuStepDefinitions {

    @Then("user should be able to see following menu names")
    public void user_should_be_able_to_see_following_menu_names(List<String> menuNames) {

        System.out.println(menuNames);

        HomePage homePage = new HomePage();
        List<String> actualMenuNames = new ArrayList <>();

        Assert.assertEquals(menuNames.size(),homePage.menu.size());
    }

}
