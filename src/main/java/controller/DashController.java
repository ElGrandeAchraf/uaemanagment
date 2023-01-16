package controller;

import org.springframework.web.bind.annotation.RequestMapping;


public class DashController {

    @RequestMapping("dash")
    public String DashBack () {
        return "Dash";
    }

}
