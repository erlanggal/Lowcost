package spring.boot.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class pageController {

    @RequestMapping({"", "/"})
    public String getPage()
    {
        return "Menu Templates/templatePage";
    }
}
