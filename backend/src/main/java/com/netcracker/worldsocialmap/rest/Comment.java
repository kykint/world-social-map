package com.netcracker.worldsocialmap.rest;

import lombok.Data;

@Data
public class Comment {
    private String username;
    private String textcomment;
    private String time;
    private String country;
//TODO rename textcomment to textComment

}