package Runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
    features={"src/test/java/features/login.feature"},
    glue={"stefDefinition"},
    plugin={"pretty","html:target/cucumber"},
    tags={"@Login"}
		)  		
		
public class testRunner {
	

	
}

