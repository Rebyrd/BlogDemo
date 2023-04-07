package com.byrd.coursedesign.Entity;

import java.sql.Clob;
import java.sql.Date;

public class Markdown {

    private int id;                 // 文章id

    private String owner;           // 文章所有者
    private String name;            // 文章名称
    private Date date;              // 最后一次修改时间
    private long tag;               // 文章标签
    private Clob content;         // 文章内容


    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public long getTag() {
        return tag;
    }

    public void setTag(long tag) {
        this.tag = tag;
    }

    public Clob getContent() {
        return content;
    }

    public void setContent(Clob content) {
        this.content = content;
    }
}
