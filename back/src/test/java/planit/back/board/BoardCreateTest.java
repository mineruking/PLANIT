package planit.back.board;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import planit.back.dto.BoardDTO;

import java.util.Collections;

import static org.assertj.core.api.Assertions.assertThat;

public class BoardCreateTest {


    @Test
    public void boardCreateTest() {
        BoardDTO board = new BoardDTO();

        BoardDTO boardDTO = new BoardDTO();
        boardDTO.setBoardWriter("Test Writer");
        boardDTO.setBoardPass("Test Pass");
        boardDTO.setBoardTitle("Test Title");
        boardDTO.setBoardContents("Test Contents");
        boardDTO.setBoardHits(0);
        boardDTO.setCreatedAt("2023-08-05");
        boardDTO.setFileAttached(0);
        boardDTO.setBoardFile(Collections.emptyList()); // No files attached

        Assertions.assertInstanceOf(BoardDTO.class, board);
    }
}
