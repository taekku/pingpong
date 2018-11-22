package pingpong.web.property;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "pingpong")
public class PingpongProperties {
    private String distDirectory;

    /**
     * @return the distDirectory
     */
    public String getDistDirectory() {
        return distDirectory;
    }

    /**
     * @param distDirectory the distDirectory to set
     */
    public void setDistDirectory(String distDirectory) {
        this.distDirectory = distDirectory;
    }
}