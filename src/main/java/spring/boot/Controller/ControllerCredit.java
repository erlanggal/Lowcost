package spring.boot.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllerCredit {

    @RequestMapping("/Payment Page Credit/payment")
    public String getPage()
    {
        return "Payment Page Credit/payment";
    }
}
