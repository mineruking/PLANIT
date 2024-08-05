package planit.back.board;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import planit.back.dto.BoardDTO;
import planit.back.repository.BoardRepository;
import planit.back.service.BoardService;

import java.io.IOException;
import java.util.Collections;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class BoardServiceTest {

    @Autowired
    private BoardService boardService;

    @Test
    @Transactional
    public void saveBoard() throws IOException {
        BoardDTO boardDTO = new BoardDTO();
        boardDTO.setBoardWriter("Test Writer");
        boardDTO.setBoardPass("Test Pass");
        boardDTO.setBoardTitle("Test Title");
        boardDTO.setBoardContents("Test Contents");
        boardDTO.setFileAttached(0);

        boardService.save(boardDTO);

        BoardDTO savedBoard = boardService.findById(boardDTO.getId());
        assertThat(savedBoard).isNotNull();
        assertThat(savedBoard.getBoardWriter()).isEqualTo("Test Writer");
        assertThat(savedBoard.getBoardPass()).isEqualTo("Test Pass");
        assertThat(savedBoard.getBoardTitle()).isEqualTo("Test Title");
        assertThat(savedBoard.getBoardContents()).isEqualTo("Test Contents");
    }
}