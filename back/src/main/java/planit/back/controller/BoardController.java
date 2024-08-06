package planit.back.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import planit.back.dto.BoardDTO;
import planit.back.service.BoardService;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/board")
public class BoardController {

    private final BoardService boardService;

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody BoardDTO boardDTO) throws IOException {
        System.out.println("boardDTO = " + boardDTO);
        boardService.save(boardDTO);
        return ResponseEntity.status(HttpStatus.OK).body("ok"); // Return success message
    }

    @GetMapping("/list")
    public List<BoardDTO> findAll() {
        // Retrieve all board entities and return as JSON array

        return boardService.findAll();
    }

    @GetMapping("/{id}")
    public BoardDTO findById(@PathVariable Long id) {
        // Retrieve board details
        return boardService.findById(id);
    }

    @GetMapping("/update/{id}")
    public BoardDTO update(@PathVariable Long id) {
        // Retrieve board details for update
        return boardService.findById(id);
    }

    @PostMapping("/update/{id}")
    public BoardDTO update(@PathVariable Long id, @RequestBody BoardDTO boardDTO) {
        boardDTO.setId(id); // Ensure the ID is set correctly in DTO
        boardService.update(boardDTO);
        return boardService.findById(id); // Return the updated board details
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        boardService.delete(id); // ID를 사용하여 리소스를 삭제하는 서비스 호출
        return ResponseEntity.status(HttpStatus.OK).body("ok"); // 성공 메시지 반환
    }
}
