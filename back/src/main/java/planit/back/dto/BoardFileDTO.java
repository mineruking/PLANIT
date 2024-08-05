package planit.back.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BoardFileDTO {
    private Long id;
    private Long boardId;
    private String originalFileName; // 사용자가 사진을 올릴때 이름중복고려해서 올리진않음
    private String storedFileName;
}

