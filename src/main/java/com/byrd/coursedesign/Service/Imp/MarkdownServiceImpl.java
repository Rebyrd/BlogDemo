package com.byrd.coursedesign.Service.Imp;

import com.byrd.coursedesign.Dao.MarkdownDao;
import com.byrd.coursedesign.Entity.Markdown;
import com.byrd.coursedesign.Service.MarkdownService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarkdownServiceImpl implements MarkdownService {
    @Autowired
    private MarkdownDao markdownDao;

    @Override
    public List<Markdown> getMarkdown() {
        return markdownDao.getMarkdown();
    }

    @Override
    public Markdown getMarkdownById(int id) {
        return markdownDao.getMarkdownById(id);
    }

    @Override
    public void insertMarkdown(Markdown md) {
        markdownDao.insertMarkdown(md);
    }

    @Override
    public void updateMarkdown(Markdown md) {
        markdownDao.updateMarkdown(md);
    }


}
