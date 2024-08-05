package planit.back.board;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import planit.back.dto.BoardDTO;
import planit.back.service.BoardService;

import java.util.List;

@SpringBootTest
public class BoardFindAllTest {

    @Autowired
    private BoardService boardService;

    @Test
    public void testFindAll() {
        List<BoardDTO> boardDTOList = boardService.findAll();

        Assertions.assertIterableEquals(boardDTOList, boardService.findAll());
    }
}
