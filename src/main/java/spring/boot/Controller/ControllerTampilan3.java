package spring.boot.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllerTampilan3 {

    @RequestMapping("/Tampilan 3/Main")
    public String getPage()
    {
        return "Tampilan 3/Main";
    }
}
