package com.eurotechStudy.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.net.MalformedURLException;

public class ProfilePage extends BasePage{

    @FindBy(name = "githubusername")
    public WebElement githubUsername;

    @FindBy(linkText = "Go Back")
    public WebElement goBackBtn;


    public ProfilePage() throws MalformedURLException {
    }
}
