package spring.boot.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllerDebit {

    @RequestMapping({"/Payment Page Debit/payment"})
    public String getPage()
    {
        return "Payment Page Debit/payment";
    }
}
