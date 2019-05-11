package com.anna.step_definitions;

import com.anna.pages.HomePage;
import com.anna.utilities.BrowserUtilities;
import com.anna.utilities.Driver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class MenuDetailsStepDefinitions extends BrowserUtilities {
    @When("user hover on {string} menu")
    public void user_hover_on_menu(String string) throws InterruptedException {
        HomePage homePage = new HomePage();

        for (WebElement w : homePage.menu){
            if (w.getText().equals(string)){
                hover(w);
                Thread.sleep(3000);
            }
        }

//        waitForVisibility(Driver.getDriver().findElements(By.xpath("//li[2]//span[@class='title title-level-2']")),5);
        List<WebElement> menuNames = Driver.getDriver().findElements(By.xpath("//li[2]//span[@class='title title-level-2']"));

        for (WebElement w : menuNames)
        System.out.println("fleet "+w.getText());

    }

    @Then("user should be able to see following dashboardmenu names")
    public void user_should_be_able_to_see_following_dashboardmenu_names(io.cucumber.datatable.DataTable dataTable) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.
        throw new cucumber.api.PendingException();
    }

    @Then("user should be able to see following fleetmenu names")
    public void user_should_be_able_to_see_following_fleetmenu_names(io.cucumber.datatable.DataTable dataTable) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.
        throw new cucumber.api.PendingException();
    }

}
