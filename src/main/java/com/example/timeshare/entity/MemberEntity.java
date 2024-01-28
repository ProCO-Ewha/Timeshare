package com.example.timeshare.entity;

import com.example.timeshare.dto.MemberDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name="members")
public class MemberEntity {
    @Id
    private String userid;
    @Column
    private String passwd;
    @Column
    private String name;
    @Column
    private String nickname;

    public static MemberEntity toMemberEntity(MemberDTO memberDTO){
        MemberEntity memberEntity=new MemberEntity();
        memberEntity.setUserid(memberDTO.getUserid());
        memberEntity.setPasswd(memberDTO.getPasswd());
        memberEntity.setName(memberDTO.getName());
        memberEntity.setNickname(memberDTO.getNickname());
        return memberEntity;
    }

}
