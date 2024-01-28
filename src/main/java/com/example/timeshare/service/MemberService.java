package com.example.timeshare.service;

import com.example.timeshare.dto.MemberDTO;
import com.example.timeshare.entity.MemberEntity;
import com.example.timeshare.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    public void join(MemberDTO dto){
        MemberEntity memberEntity=MemberEntity.toMemberEntity(dto);
        memberRepository.save(memberEntity);
    }
    public MemberDTO login(MemberDTO memberDTO) {
        Optional<MemberEntity> byUserid = memberRepository.findById(memberDTO.getUserid());
        if(byUserid.isPresent()){ // Userid 가 존재한다면
            MemberEntity memberEntity=byUserid.get(); // Optional 에서 꺼냄
            if(memberEntity.getPasswd().equals(memberDTO.getPasswd())){ // 비밀번호가 일치한다면
                MemberDTO dto=MemberDTO.toMemberDTO(memberEntity); // entity->dto 변환 후 리턴
                return dto;
            }
            else return null;
        }
        else return null;
    }
}
