package com.byrd.coursedesign;

import java.util.*;
import java.util.stream.Collectors;

class Tag{

    static final long ASM = 0x1;
    static final long C = 0x2;
    static final long CPP = 0x4;
    static final long JAVA = 0x8;
    static final long DOTNET = 0x10;
    static final long CSHARP = 0x20;
    static final long PYTHON = 0x40;
    static final long PHP = 0x80;
    static final long JAVASCRIPT = 0x100;
    static final long HTML = 0x200;
    // waiting ···

    private static final Map<Long, String> Tags = Arrays.stream(new Object[][]{
            {ASM, "ASM"},
            {C, "C"},
            {CPP,"CPP"},
            {JAVA,"JAVA"},
            {DOTNET,"DOTNET"},
            {CSHARP,"CSHARP"},
            {PYTHON,"PYTHON"},
            {PHP,"PHP"},
            {JAVASCRIPT,"JAVASCRIPT"},
            {HTML,"HTML"}
            // waiting ···
    }).collect(Collectors.toMap(kv -> (Long) kv[0], kv -> (String) kv[1]));

    private long tag;

    Tag(){
        this.tag = 0;
    }

    Tag(long tag){
        this.tag = tag;
    }

    // convert integer to string
    public List<String> getTagName(){
        List<String> tags = new ArrayList<>();
        Set<Long> keys =Tags.keySet();
        for (Long key:keys) {
            if ( (key & tag) != 0){
                tags.add(Tags.get(key));
            }
        }
        return tags;
    }

    public long addTag(String tag){
        for (Map.Entry<Long,String> i: Tags.entrySet()) {
            if ( i.getValue().equals(tag)){
                this.tag |= i.getKey();
                break;
            }
        }
        return this.tag;
    }

}
