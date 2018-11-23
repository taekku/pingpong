package pingpong.util.file;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FilenameFilter;
import java.io.IOException;

/**
 * 파일 및 디렉토리 작업과 관련된 메소드를 모아놓은 클래스
 */
public class FileUtil {

  /**
   * 지정한 디렉토리의 모든 파일을 삭제한다.
   *
   * @param   strDir        대상 디렉토리
   */
  public static final void clearDirectory(String strDir) {
          File fDir = new File(strDir);
          String[] flist = fDir.list();
          for (int i = 0; i < flist.length; i++) {
                  File file = new File(fDir.getAbsoluteFile() + File.separator + flist[i]);
                  if (file.isFile()) { // 파일인 경우!
                          new File(flist[i]).delete();
                  } else { // 디렉토리인 경우!
                          String[] fileList = file.list();
                          if (fileList != null && fileList.length > 0) {
                                  // Directory안에 또 Directory가 존재할 경우 재귀호출
                                  clearDirectory(fDir.getAbsolutePath() + File.separator + flist[i]);
                          }
                          new File(fDir.getAbsolutePath() + File.separator + flist[i]).delete();
                  } // if
          } // for
  } // clearDirectory()

  /**
   * 지정한 디렉토리를 삭제한다. (자식 디렉토리가 있어도 모두 삭제한다.)
   *
   * @param   sDir        대상 디렉토리
   */
  public static final void removeDirectory(String sDir) {
          clearDirectory(sDir); // Directory안의 내용을 모두 삭제한다.
          new File(sDir).delete();
  } // removeDirectory()

  /**
   * removeFiles()메소드와 같은 기능을 함. 하위 호환성을 위해 남겨둠.
   *
   * @deprecated removeFiles()를 사용하세요.
   */
  public static final boolean removeFilterFile(String dir, String wildcard) {
          return removeFiles(dir, wildcard);
  } // removeFilterFile() - deprecated

  /**
   * 여러 개의 파일을 삭제한다.
   * wildcard_filename 는 삭제할 파일들의 이름 규칙이다.
   * wildcard_filename 에는 하나의 *(asterisk)만 포함 될 수 있다.
   * ex) removeFiles("D:\\test\\", "memo*.txt")
   *
   * @param   dir            검색할 디렉토리
   * @param   wildcard_filename       와일드카드를 포함한 파일명
   */
  public static final boolean removeFiles(String dir, String wildcard_filename) {
          try {
                  return removeFiles(new File(dir), wildcard_filename);
          } catch (Exception e) {}
          return true;
  } // removeFiles()

  /**
   * 여러 개의 파일을 삭제한다.
   * wildcard_filename 는 삭제할 파일들의 이름 규칙이다.
   * wildcard_filename 에는 하나의 *(asterisk)만 포함 될 수 있다.
   * ex) removeFiles("D:\\test\\", "memo*.txt")
   *
   * @param   dir            검색할 디렉토리
   * @param   wildcard_filename       와일드카드를 포함한 파일명
   */
  public static final boolean removeFiles(File dir, String wildcard_filename) {
          try {
                  if (dir == null || dir.isDirectory() == false) {
                          return true;
                  }
                  if (wildcard_filename.indexOf('*') < 0) {
                          return removeFile(dir + wildcard_filename);
                  }
                  WildCardFilter ff = new WildCardFilter(wildcard_filename);
                  // get files
                  File[] file = dir.listFiles(ff);
                  // delete files
                  for (int i = 0; i < file.length; i++) {
                          try {
                                  file[i].delete();
                          } catch (Exception e) {}
                  }
          } catch (Exception e) {
                  e.printStackTrace();
                  return false;
          }
          return true;
  } // removeFiles()

  /** used by removeFiles() */
  private static class WildCardFilter implements FilenameFilter {
          String prefix, postfix;

          public WildCardFilter(String wildcard) throws Exception {
                  int pos = wildcard.indexOf('*');
                  prefix = wildcard.substring(0, pos);
                  postfix = ((pos + 1) < wildcard.length()) ? wildcard.substring(pos + 1) : "";
          }

          public boolean accept(File dir, String fn) {
                  fn = fn.toLowerCase();
                  return (fn.startsWith(prefix) && fn.endsWith(postfix));
          }
  } // WildCardFilter

  /**
   * 지정한 파일을 삭제한다.
   *
   * @param strFile 삭제할 파일명 - AbsoluteDirectory 권장
   */
  public static final boolean removeFile(String strFile) {
          try {
                  File fu = new File(strFile);
                  return removeFile(fu);
          }
          // 만약 널값을 입력했다면 분명! 버그가 될 가능성이 높으니깐 경고를 하자
          catch (NullPointerException npe) {
                  //System.err.println("Error: cannot delete the file that name is null");
                  npe.printStackTrace();
                  return false;
          }
  } // removeFile() #1

  /**
   * 파일을 제거한다.
   *
   * @return 존재하지 않으면 true, 존재하면 false
   */
  public static final boolean removeFile(File file) {
          try {
                  if (file.delete())
                          return true;
                  return !file.exists();
          } catch (RuntimeException ne) {
                  return false;
          }
  } // removeFile() #2

  /**
   * 파일의 존재여부를 검사한다.
   *
   * @param   strFile        검사할 파일명
   */
  public static final boolean isExist(String strFile) {
          File fu = new File(strFile);
          return fu.canRead();
  } // isExist()

  /**
   * 지정한 파일을 생성한다. (해당 디렉토리가 없으면 모두 생성시킨다.)
   *
   * @param   sFile      생성할 파일명 (크기가 0바이트인 파일)
   * @exception IOException
   */
  public static final File makeFile(String sFile) throws IOException {
          File file = new File(sFile);
          try {
                  file.createNewFile();
          } catch (IOException e1) {
                  try {
                          new File(FileUtil.getDirectory(sFile)).mkdirs();
                          file.createNewFile();
                  } catch (IOException e2) {
                          throw new IOException("Cannot create this file -> " + file);
                  }
          }
          return file;
  } // makeFile()
  
  public static final File makeFile(File dir, String sFile) throws IOException {
    File file = new File(dir, sFile);
    try {
      file.createNewFile();
    } catch (IOException e1) {
      try {
        new File(FileUtil.getDirectory(sFile)).mkdirs();
        file.createNewFile();
      } catch (IOException e2) {
        throw new IOException("Cannot create this file -> " + file);
      }
    }
    return file;
  } // makeFile()

  /**
   * 파일을 해당 폴더로 복사합니다.
   *
   * @param   strFile   원본 파일
   * @param   strDir    복사할 폴더
   * @exception   IOException
   */
  public static final void copyTo(String strFile, String strDir) throws IOException {
          copyFile(strFile, FileUtil.toDirString(strDir) + FileUtil.getNameExt(strFile));
  } // copyTo()

  /**
   * 파일을 복사합니다.
   * 새 파일의 경로가 존재하지 않으면, 디렉토리를 생성하여 파일을 만듭니다.
   * 내부 버퍼 사이즈는 2048바이트입니다.
   *
   * @param   fileSrc       원본 파일
   * @param   fileDest      생성할 파일
   * @exception   IOException
   */
  public static final void copyFile(File fileSrc, File fileDest) throws IOException {
          copyFile(fileSrc.getPath(), fileDest.getPath(), 2048);
  } // copyFile() #1

  /**
   * 파일을 복사합니다.
   * 새 파일의 경로가 존재하지 않으면, 디렉토리를 생성하여 파일을 만듭니다.
   * 내부 버퍼 사이즈는 2048바이트입니다.
   *
   * @param   strSrcFile    원본 파일
   * @param   strDestFile   생성할 파일
   * @exception   IOException
   */
  public static final void copyFile(String strSrcFile, String strDestFile) throws IOException {
          copyFile(strSrcFile, strDestFile, 2048);
  } // copyFile() #2

  /**
   * 파일을 지정한 크기의 버퍼를 사용하여 복사합니다.
   * 새 파일의 경로가 존재하지 않으면, 디렉토리를 생성하여 파일을 만듭니다.
   *
   * @param   fileSrc       원본 파일
   * @param   fileDest      생성할 파일
   * @param   iBufferSize   버퍼 크기
   * @exception   IOException
   */
  public static final void copyFile(File fileSrc, File fileDest, int iBufferSize) throws IOException {
          copyFile(fileSrc.getPath(), fileDest.getPath(), iBufferSize);
  } // copyFile() #3

  /**
   * 파일을 지정한 크기의 버퍼를 사용하여 복사합니다.
   * 새 파일의 경로가 존재하지 않으면, 디렉토리를 생성하여 파일을 만듭니다.
   *
   * @param   strSrcFile   원본 경로
   * @param   strDestFile  생성할 경로
   * @param   iBufferSize  버퍼 크기
   * @exception   IOException
   */
  public static final void copyFile(String strSrcFile, String strDestFile, int iBufferSize) throws IOException {
          FileInputStream fin = null;
          FileOutputStream fout = null;
          try {
                  fin = new FileInputStream(strSrcFile);
                  try {
                          fout = new FileOutputStream(strDestFile);
                  } catch (Exception e) {
                          // 디렉토리 생성시켜서 다시 한 번 수행함.
                          new File(FileUtil.getDirectory(strDestFile)).mkdirs();
                          fout = new FileOutputStream(strDestFile);
                  }
                  byte[] buffer = new byte[iBufferSize];
                  int bytesRead = 0;
                  while (true) {
                          bytesRead = fin.read(buffer);
                          if (bytesRead == -1)
                                  break;
                          fout.write(buffer, 0, bytesRead);
                  }
                  fout.flush();
                  fin.close();
                  fin = null;
                  fout.close();
                  fout = null;
          } finally {
                  if (fin != null)
                          try {
                                  fin.close();
                          } catch (IOException e) {
                                  e.printStackTrace();
                          }
                  if (fout != null)
                          try {
                                  fout.close();
                          } catch (IOException e) {
                                  e.printStackTrace();
                          }
          }
  } // copyFile() #4

  /**
   * 파일을 지정된 이름으로 변경합니다.  // 이부분도 좀더 다듬자...
   */
  public static final void moveFile(File fileSrc, File fileDest) {
          fileSrc.renameTo(fileDest);
  } // moveFile() #1

  /**
   * 파일을 지정된 이름으로 변경합니다.  // 이부분도 좀더 다듬자...
   */
  public static final void moveFile(String strFileSrc, String strFileDest) {
          new File(strFileSrc).renameTo(new File(strFileDest));
  } // moveFile() #2

  /**
   * 
   * @param strFile
   * @return .txt .exe
   */
  public static final String getExt(String strFile) {
    return strFile.substring(getExtIndex(strFile));
  } // getExt()

  /**
   *
   */
  public static final int getExtIndex(String strFile) {
    int sp = getNameIndex(strFile);
    for (int i = strFile.length() - 1; i >= sp; i--) {
      if (strFile.charAt(i) == '\\' || strFile.charAt(i) == '/') return strFile.length();
      if (strFile.charAt(i) == '.') return (i);
    } // while
    return strFile.length();
  } // getExtIndex()
  /**
  *
  */
 public static final String getNameExt(String strFile) {
   return strFile.substring(getNameIndex(strFile));
 } // getNameExt()

 /**
  *
  */
 public static final String getName(String strFile) {
   int iName = getNameIndex(strFile);
   int iExt = getExtIndex(strFile);
   if( iExt < 0)
     return strFile.substring(iName);
   else
     return strFile.substring(iName, iExt);
 } // getName()

 /**
  *
  */
 public static final int getNameIndex(String strFile) {
   int len = strFile.length(), pos = 0, i = strFile.length() - 1;
   for (; i >= 0; i--) {
     if (strFile.charAt(i) == '\\' || strFile.charAt(i) == '/') {
       pos = (i + 1);
       break;
     }
   } // while
   i = pos;
   while (i < len && strFile.charAt(i) == '.') ++i;
   return (len == i)? i: pos;
 } // getNameIndex

 /**
  *
  */
 public static final String getDirectory(String strFile) {
   return strFile.substring(0, getNameIndex(strFile));
 }

 /////////////////////////////////////////////////////////////////////////
 /**
  * 디렉토리 명 마지막에 File.separator를 붙인다.
  *
  * @param   strDir    디렉토리 경로
  * @return  디렉토리 경로
  */
 public static final String toDirString(String strDir) {
   String str = strDir;// StringUtil.toEmptyString(strDir);
   if (str.endsWith("\\") || str.endsWith("/") || str == "" || str.endsWith(":")) {
     return str;
   }
   return (str + File.separator);
 } // toDirString()

}