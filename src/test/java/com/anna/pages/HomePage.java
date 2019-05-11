package com.anna.pages;

import com.anna.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage {
    public HomePage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//span[@class='title title-level-1']")
    public List<WebElement> menu;

    @FindBy(xpath = "//h1//a[@title='Fleet Management']")
    public WebElement appLogo;

    @FindBy(id = "user-menu")
    public WebElement userName;


}
