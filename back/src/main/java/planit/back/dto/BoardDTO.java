package planit.back.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
@ToString
public class BoardDTO {
    private Long id;
    private String boardTitle;
    private String boardContents;
    private int boardHits;
    private String createdAt;
    private int fileAttached;
    private List<MultipartFile> boardFile;

    public BoardDTO(){

    }

    public BoardDTO(Long id, String boardWriter, String boardPass, String boardTitle, String boardContents, int boardHits, String createdAt, int fileAttached, List<MultipartFile> boardFile) {
        this.id = id;
        this.boardTitle = boardTitle;
        this.boardContents = boardContents;
        this.boardHits = boardHits;
        this.createdAt = createdAt;
        this.fileAttached = fileAttached;
        this.boardFile = boardFile;
    }
}