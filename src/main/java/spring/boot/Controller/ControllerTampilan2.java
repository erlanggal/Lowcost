package spring.boot.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllerTampilan2 {

    @RequestMapping({"/Tampilan 2/HelloWorld"})
    public String getPage()
    {
        return "Tampilan 2/HelloWorld";
    }
}
