package pingpong.web.service.auth;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import pingpong.web.db.common.dao.AbstractDAO;


@Repository("authMapper")
public class AuthMapper extends AbstractDAO {
  
  public List<Map<String, Object>> getUser(String login_id) {
    HashMap<String, Object> param = new HashMap<String, Object>();
    param.put("login_id", login_id);
    return (List<Map<String, Object>>) selectList("pingpong.db.auth.Auth.getUser", param);
  }
}