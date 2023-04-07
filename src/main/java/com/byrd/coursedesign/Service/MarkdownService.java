package com.byrd.coursedesign.Service;


import com.byrd.coursedesign.Entity.Markdown;
import java.util.List;

public interface MarkdownService {
    public List<Markdown> getMarkdown();
    public Markdown getMarkdownById(int id);
    public void insertMarkdown(Markdown md);
    public void updateMarkdown(Markdown md);
}
