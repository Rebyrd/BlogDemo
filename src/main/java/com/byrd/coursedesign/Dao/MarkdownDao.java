package com.byrd.coursedesign.Dao;

import com.byrd.coursedesign.Entity.Markdown;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface MarkdownDao {
    public List<Markdown> getMarkdown();
    public Markdown getMarkdownById(int id);
    public void insertMarkdown(Markdown md);
    public void updateMarkdown(Markdown md);
}
