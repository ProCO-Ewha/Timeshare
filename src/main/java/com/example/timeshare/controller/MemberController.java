package com.example.timeshare.controller;

import com.example.timeshare.dto.MemberDTO;
import com.example.timeshare.service.MemberService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor // MemberService 에 대한 멤버 사용
public class MemberController {

    // 생성자
    @Autowired
    private MemberService memberService; // 회원가입 페이지 출력 요청

    @GetMapping("/timeshare/join")
    public String newMember() {
        return "timeshare/join";
    }

    @PostMapping("/timeshare/join")
    public String save(@ModelAttribute MemberDTO memberDTO) {
        System.out.println("MemberDTO=" + memberDTO);
        memberService.join(memberDTO);

        return "redirect:/timeshare/login";
    }

    @GetMapping("/timeshare/login")
    public String loginForm() {
        return "timeshare/login"; // 수정
    }

    @PostMapping("/timeshare/login")
    public String login(@ModelAttribute MemberDTO memberDTO, HttpSession session) {
        MemberDTO loginResult = memberService.login(memberDTO);
        if (loginResult != null) {
            session.setAttribute("loginId", loginResult.getUserid());
            // 다른 페이지로 이동할 때도 로그인 상태를 유지시킴
            return "timeshare/schedule"; // login 성공
        } else
            return "timeshare/login"; // login 실패
    }
    @GetMapping("/hi")
    public String hi(){
        return "hi";
    }

}
