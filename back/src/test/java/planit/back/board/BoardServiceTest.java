package planit.back.board;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import planit.back.dto.BoardDTO;
import planit.back.service.BoardService;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class BoardServiceTest {

    @Autowired
    private BoardService boardService;

    @Test
    @Transactional
    public void saveBoard() throws IOException {
        BoardDTO boardDTO = new BoardDTO();
        boardDTO.setBoardTitle("Test Title2");
        boardDTO.setBoardContents("Test Contents2");
        boardDTO.setFileAttached(0);

        boardService.save(boardDTO);

        BoardDTO savedBoard = boardService.findById(boardDTO.getId());
        assertThat(savedBoard).isNotNull();
        assertThat(savedBoard.getBoardTitle()).isEqualTo("Test Title2");
        assertThat(savedBoard.getBoardContents()).isEqualTo("Test Contents2");
    }
}