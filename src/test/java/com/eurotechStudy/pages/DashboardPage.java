package com.eurotechStudy.pages;


import com.eurotechStudy.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.net.MalformedURLException;
import java.util.List;

public class DashboardPage extends BasePage{

    @FindBy(xpath = "//p[text()=' Welcome ']")
    public WebElement welcomeMessage;

    @FindBy(className = "nav__menu-item")
    public List<WebElement> dashboardMenus;

    @FindBy(xpath = "//a[text()='All Posts']")
    public WebElement allPostsMenu;

    @FindBy(xpath = "//a[text()='Developers']")
    public WebElement developersMenu;

    @FindBy(xpath = "//span[text()='My Account']")
    public WebElement myAccountMenu;

    @FindBy(xpath = "//span[text()='Logout']")
    public WebElement logOutButton;

    @FindBy(xpath = "//*[contains(text(),'Edit Profile')]")
    public WebElement editProfile;

    @FindBy(xpath = "//td[contains(text(),'Microsoft')]/../td[2]")
    public WebElement usersTitle;

    public DashboardPage() throws MalformedURLException {
    }


    public String getTitle(String companyName) throws MalformedURLException {
        String title= Driver.get().findElement(By.xpath("//td[contains(text(),'"+companyName+"')]/../td[2]")).getText();
        return title;
    }

    public String getCompany(String usersTitle) throws MalformedURLException {
        String text = Driver.get().findElement(By.xpath("//td[contains(text(),'" + usersTitle + "')]/../td[1]")).getText();
        return text;
    }
}
