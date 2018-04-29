package spring.boot.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllerTampilan1 {
    @RequestMapping({"/Tampilan 1/index"})
    public String getPage()
    {
        return "Tampilan 1/index";
    }
}
