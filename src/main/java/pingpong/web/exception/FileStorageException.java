package pingpong.web.exception;

public class FileStorageException extends RuntimeException {

  private static final long serialVersionUID = -5089409876440785739L;

  public FileStorageException(String message) {
      super(message);
  }

  public FileStorageException(String message, Throwable cause) {
      super(message, cause);
  }
}