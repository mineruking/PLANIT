package planit.back.service;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import planit.back.dto.BoardDTO;
import planit.back.dto.BoardFileDTO;
import planit.back.repository.BoardRepository;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public void save(BoardDTO boardDTO) throws IOException {
        List<MultipartFile> boardFiles = boardDTO.getBoardFile();

        if (boardFiles == null || boardFiles.isEmpty() || boardFiles.get(0).isEmpty()) {

            // 파일 없다.
            boardDTO.setFileAttached(0);
            boardRepository.save(boardDTO);

        } else {

            // 파일 있다.
            boardDTO.setFileAttached(1);

            // 게시글 저장 후 id값 활용을 위해 리턴 받음.
            BoardDTO savedBoard = boardRepository.save(boardDTO);

            for(MultipartFile boardFile : boardDTO.getBoardFile()) {

                String originalFilename = boardFile.getOriginalFilename();
                System.out.println("originalFilename = " + originalFilename);

                // 저장용 이름 만들기
                System.out.println(System.currentTimeMillis());
                String storedFileName = System.currentTimeMillis() + "-" + originalFilename;
                System.out.println("storedFileName = " + storedFileName);

                // BoardFileDTO 세팅
                BoardFileDTO boardFileDTO = new BoardFileDTO();
                boardFileDTO.setOriginalFileName(originalFilename);
                boardFileDTO.setStoredFileName(storedFileName);
                boardFileDTO.setBoardId(savedBoard.getId());

                // 파일 저장용 폴더에 파일 저장 처리
                String savePath = "C:/Users/PLANIT/Desktop/planit_site/PLANIT/back/upload_files" + storedFileName;
                boardFile.transferTo(new File(savePath));

                // board_file_table 저장 처리
                boardRepository.saveFile(boardFileDTO);
            }

            // 파일 이름 가져오기
        }
    }

    public List<BoardDTO> findAll() {
        return boardRepository.findAll();
    }

    public void updateHits(Long id) {
        boardRepository.updateHits(id);
    }

    public BoardDTO findById(Long id) {
        return boardRepository.findById(id);
    }

    public void update(BoardDTO boardDTO) {
        boardRepository.update(boardDTO);
    }

    public void delete(Long id) {
        boardRepository.delete(id);
    }

    public List<BoardFileDTO> findFileList(Long id) {
        return boardRepository.findFileList(id);
    }
}