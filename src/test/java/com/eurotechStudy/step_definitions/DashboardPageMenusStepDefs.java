package com.eurotechStudy.step_definitions;

import com.eurotechStudy.pages.DashboardPage;
import com.eurotechStudy.pages.LoginPage;
import com.eurotechStudy.utilities.BrowserUtils;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.net.MalformedURLException;
import java.util.List;
import java.util.Map;

public class DashboardPageMenusStepDefs {


    @Then("the user should be able to see following menus")
    public void the_user_should_be_able_to_see_following_menus(List<String> menuOptions) throws MalformedURLException {

        System.out.println("menuOptions.size() = " + menuOptions.size());

        System.out.println("menuOptions = " + menuOptions);
        System.out.println("BrowserUtils.dashboardMenus) = " + BrowserUtils.getElementsText(new DashboardPage().dashboardMenus));

        Assert.assertEquals(menuOptions, BrowserUtils.getElementsText(new DashboardPage().dashboardMenus));

    }

    @When("the user logs in using following credentials")
    public void the_user_logs_in_using_following_credentials(Map<String, String > userCredential) throws MalformedURLException {

        System.out.println("userCredential = " + userCredential);
        new LoginPage().login(userCredential.get("username"), userCredential.get("password"));

    }
    @Then("the user should be able to see following menu test")
    public void theUserShouldBeAbleToSeeFollowingMenuTest(DataTable table) {
        System.out.println("table.cell(0,0) = " + table.cell(0, 0));
        System.out.println("table.cell(0,1) = " + table.cell(0, 1));
        System.out.println("table.cell(1,0) = " + table.cell(1, 0));
        System.out.println("table.cell(1,1) = " + table.cell(1, 1));

    }
}
