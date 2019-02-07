package pingpong.web.service.auth;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

  @Autowired
  AuthMapper authMapper;
  
  public List<Map<String, Object>> login(String login_id) {
    return authMapper.getUser(login_id);
  }
}