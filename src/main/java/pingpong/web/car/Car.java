package pingpong.web.car;

import java.util.Random;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//@JsonIgnoreProperties(ignoreUnknown = true)
public class Car {
    static Random random = new Random(1234123);
    private Long id;
    private String name;
    public Car(String name){
        this.setId(random.nextLong());
        this.setName(name);
    }
    
    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    // public String toString(){
    //     return "{id:" + this.id + ",name:" + this.name + "}";
    // }
    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }
}