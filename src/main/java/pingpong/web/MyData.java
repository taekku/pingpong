package pingpong.web;

public class MyData {
  private String myData;
  public MyData(){

  }
  
  /**
   * @return the myData
   */
  public String getMyData() {
    return myData;
  }

  /**
   * @param myData the myData to set
   */
  public void setMyData(String myData) {
    this.myData = myData;
  }

  public MyData(String myData) {
    this.setMyData(myData);
  }

}