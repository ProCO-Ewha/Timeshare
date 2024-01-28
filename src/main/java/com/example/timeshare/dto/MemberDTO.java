package com.example.timeshare.dto;

import com.example.timeshare.entity.MemberEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
public class MemberDTO {

    private String userid;
    private String passwd;
    private String name;
    private String nickname;

    public static MemberDTO toMemberDTO(MemberEntity memberEntity){
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setUserid(memberEntity.getUserid());
        memberDTO.setPasswd(memberEntity.getPasswd());
        memberDTO.setPasswd(memberEntity.getName());
        memberDTO.setPasswd(memberEntity.getNickname());

        return memberDTO;
    }
}
