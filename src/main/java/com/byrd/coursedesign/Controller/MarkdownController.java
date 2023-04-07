package com.byrd.coursedesign.Controller;

import com.byrd.coursedesign.Entity.Markdown;
import com.byrd.coursedesign.Service.MarkdownService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MarkdownController {
    @Autowired
    private MarkdownService markdownService;

    @RequestMapping("getMarkdown")
    public List<Markdown> getMarkdown(){
        return markdownService.getMarkdown();
    }

    @RequestMapping("getMarkdownById")
    public Markdown getMarkdownById(int id){
        return markdownService.getMarkdownById(id);
    }

    @RequestMapping("insertMarkdown")
    public void insertMarkdown(Markdown md){
        markdownService.insertMarkdown(md);
    }

    @RequestMapping("updateMarkdown")
    public void updateMarkdown(Markdown md){
        markdownService.updateMarkdown(md);
    }

}
