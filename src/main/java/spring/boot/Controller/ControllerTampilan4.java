package spring.boot.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllerTampilan4 {
    @RequestMapping({"/Tampilan 4/index"})
    public String getPage()
    {
        return "Tampilan 4/index";
    }
}
