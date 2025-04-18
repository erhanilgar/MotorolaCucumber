package com.eurotechStudy.pages;


import com.eurotechStudy.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.net.MalformedURLException;


public abstract class BasePage {

    public BasePage() throws MalformedURLException {

        PageFactory.initElements(Driver.get(), this);
        //bu sayfada bulunan element ve methodlari kullanmama izin veriyor.
    }

    @FindBy(linkText = "Developers")
    public WebElement developers;

    @FindBy(linkText = "Login")
    public WebElement loginBtnBasePage;

    @FindBy(xpath = "//span[contains(text(),'Google')]")
    public WebElement signWithGoogle;

    @FindBy(xpath = "//span[contains(text(),'Github')]")
    public WebElement signWithGithub;

    @FindBy(linkText = "Sign Up")
    public WebElement signUp;

    @FindBy(id = "rcc-confirm-button")
    public WebElement understandBtn;


    public void navigateToMenu(String menuName) throws MalformedURLException {

        WebElement menu =   Driver.get().findElement(By.xpath("//a[text()='" + menuName + "']"));

        menu.click();
    }

    
}
