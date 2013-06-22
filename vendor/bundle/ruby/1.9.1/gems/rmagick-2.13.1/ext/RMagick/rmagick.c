/**************************************************************************//**
 * Contains Magick module methods.
 *
 * Copyright &copy; 2002 - 2009 by Timothy P. Hunter
 *
 * Changes since Nov. 2009 copyright &copy; by Benjamin Thomas and Omer Bar-or
 *
 * @file     rmagick.c
 * @version  $Id: rmagick.c,v 1.4 2009/12/20 02:33:32 baror Exp $
 * @author   Tim Hunter
 ******************************************************************************/

#include "rmagick.h"




/**
 * If called with the optional block, iterates over the colors, otherwise
 * returns an array of Magick::Color objects.
 *
 * Ruby usage:
 *   - @verbatim Magick::colors @endverbatim
 *   - @verbatim Magick::colors { |colorinfo| } @endverbatim
 *
 * Notes:
 *   - There are 3 implementations.
 *
 * @param class the class on which the method is run.
 * @return either the input class (if a block was given) or the array of colors.
 */
VALUE
Magick_colors(VALUE class)
{
    const ColorInfo **color_info_list;
    unsigned long number_colors, x;
    volatile VALUE ary;
    ExceptionInfo exception;

    GetExceptionInfo(&exception);

    color_info_list = GetColorInfoList("*", &number_colors, &exception);
    CHECK_EXCEPTION()
    (void) DestroyExceptionInfo(&exception);


    if (rb_block_given_p())
    {
        for (x = 0; x < number_colors; x++)
        {
            (void) rb_yield(Import_ColorInfo(color_info_list[x]));
        }
        magick_free((void *)color_info_list);
        return class;
    }
    else
    {
        ary = rb_ary_new2((long) number_colors);
        for (x = 0; x < number_colors; x++)
        {
            (void) rb_ary_push(ary, Import_ColorInfo(color_info_list[x]));
        }

        magick_free((void *)color_info_list);
        return ary;
    }
}


/**
 * If called with the optional block, iterates over the fonts, otherwise returns
 * an array of Magick::Font objects.
 *
 * Ruby usage:
 *   - @verbatim Magick::fonts @endverbatim
 *   - @verbatim Magick::fonts { |fontinfo| } @endverbatim
 *
 * @param class the class on which the method is run.
 * @return either the input class (if a block was given) or the array of fonts.
 */
VALUE
Magick_fonts(VALUE class)
{
    const TypeInfo **type_info;
    unsigned long number_types, x;
    volatile VALUE ary;
    ExceptionInfo exception;

    GetExceptionInfo(&exception);
    type_info = GetTypeInfoList("*", &number_types, &exception);
    CHECK_EXCEPTION()
    (void) DestroyExceptionInfo(&exception);

    if (rb_block_given_p())
    {
        for (x = 0; x < number_types; x++)
        {
            (void) rb_yield(Import_TypeInfo((const TypeInfo *)type_info[x]));
        }
        magick_free((void *)type_info);
        return class;
    }
    else
    {
        ary = rb_ary_new2((long)number_types);
        for (x = 0; x < number_types; x++)
        {
            (void) rb_ary_push(ary, Import_TypeInfo((const TypeInfo *)type_info[x]));
        }
        magick_free((void *)type_info);
        return ary;
    }

}


/**
 * Build the @@formats hash. The hash keys are image formats. The hash values
 * specify the format "mode string", i.e. a description of what ImageMagick can
 * do with that format. The mode string is in the form "BRWA", where
 *   - "B" is "*" if the format has native blob support, or " " otherwise.
 *   - "R" is "r" if ImageMagick can read that format, or "-" otherwise.
 *   - "W" is "w" if ImageMagick can write that format, or "-" otherwise.
 *   - "A" is "+" if the format supports multi-image files, or "-" otherwise.
 * 
 * No Ruby usage (internal function)
 *
 * @param magick_info a MagickInfo object.
 * @return the formats hash.
 */
static VALUE
MagickInfo_to_format(const MagickInfo *magick_info)
{
    char mode[4];

    mode[0] = magick_info->blob_support ? '*': ' ';
    mode[1] = magick_info->decoder ? 'r' : '-';
    mode[2] = magick_info->encoder ? 'w' : '-';
    mode[3] = magick_info->encoder && magick_info->adjoin ? '+' : '-';

    return rb_str_new(mode, sizeof(mode));
}


/**
 * Build the @@formats hash. The hash keys are image formats. The hash values
 * specify the format "mode string", i.e. a description of what ImageMagick can
 * do with that format. The mode string is in the form "BRWA", where
 *   - "B" is "*" if the format has native blob support, or " " otherwise.
 *   - "R" is "r" if ImageMagick can read that format, or "-" otherwise.
 *   - "W" is "w" if ImageMagick can write that format, or "-" otherwise.
 *   - "A" is "+" if the format supports multi-image files, or "-" otherwise.
 * 
 * Ruby usage:
 *   - @verbatim Magick.init_formats @endverbatim
 *
 * Notes:
 *   - Only called once.
 *   - There are 3 implementations.
 *
 * @param class the class on which the method is run.
 * @return the formats hash.
 * @see MagickInfo_to_format
 */
VALUE
Magick_init_formats(VALUE class)
{
    const MagickInfo **magick_info;
    unsigned long number_formats, x;
    volatile VALUE formats;
    ExceptionInfo exception;

    class = class;      // defeat "never referenced" message from icc
    formats = rb_hash_new();

    // IM 6.1.3 added an exception argument to GetMagickInfoList
    GetExceptionInfo(&exception);
    magick_info = GetMagickInfoList("*", &number_formats, &exception);
    CHECK_EXCEPTION()
    (void) DestroyExceptionInfo(&exception);


    for (x = 0; x < number_formats; x++)
    {
        (void) rb_hash_aset(formats
                            , rb_str_new2(magick_info[x]->name)
                            , MagickInfo_to_format((const MagickInfo *)magick_info[x]));
    }
    return formats;
}


/**
 * Get/set resource limits. If a limit is specified the old limit is set to the
 * new value. Either way the current/old limit is returned.
 *
 * Ruby usage:
 *   - @verbatim Magick.limit_resource(resource) @endverbatim
 *   - @verbatim Magick.limit_resource(resource, limit) @endverbatim
 *
 * @param argc number of input arguments.
 * @param argv array of input arguments.
 * @param class the class on which the method is run.
 * @return the current/old limit.
 */
VALUE
Magick_limit_resource(int argc, VALUE *argv, VALUE class)
{
    volatile VALUE resource, limit;
    ResourceType res = UndefinedResource;
    char *str;
    ID id;
    unsigned long cur_limit;

    rb_scan_args(argc, argv, "11", &resource, &limit);

    switch (TYPE(resource))
    {
        case T_NIL:
            return class;

        case T_SYMBOL:
            id = (ID)SYM2ID(resource);
            if (id == rb_intern("area"))
            {
                res = AreaResource;
            }
            else if (id == rb_intern("memory"))
            {
                res = MemoryResource;
            }
            else if (id == rb_intern("map"))
            {
                res = MapResource;
            }
            else if (id == rb_intern("disk"))
            {
                res = DiskResource;
            }
            else if (id == rb_intern("file"))
            {
                res = FileResource;
            }
            else
            {
                rb_raise(rb_eArgError, "unknown resource: `:%s'", rb_id2name(id));
            }
            break;

        default:
            str = StringValuePtr(resource);
            if (*str == '\0')
            {
                return class;
            }
            else if (rm_strcasecmp("area", str) == 0)
            {
                res = AreaResource;
            }
            else if (rm_strcasecmp("memory", str) == 0)
            {
                res = MemoryResource;
            }
            else if (rm_strcasecmp("map", str) == 0)
            {
                res = MapResource;
            }
            else if (rm_strcasecmp("disk", str) == 0)
            {
                res = DiskResource;
            }
            else if (rm_strcasecmp("file", str) == 0)
            {
                res = FileResource;
            }
            else
            {
                rb_raise(rb_eArgError, "unknown resource: `%s'", str);
            }
            break;
    }

    cur_limit = GetMagickResourceLimit(res);

    if (argc > 1)
    {
        (void) SetMagickResourceLimit(res, (MagickSizeType)NUM2ULONG(limit));
    }

    return ULONG2NUM(cur_limit);
}


/**
 * Set the amount of free memory allocated for the pixel cache.  Once this
 * threshold is exceeded, all subsequent pixels cache operations are to/from
 * disk.
 *
 * Ruby usage:
 *   - @verbatim Magick.set_cache_threshold(megabytes) @endverbatim
 *
 * Notes:
 *   - singleton method
 *
 * @param class the class on which the method is run.
 * @param threshold the number of megabytes to set.
 * @return the class.
 */
VALUE
Magick_set_cache_threshold(VALUE class, VALUE threshold)
{
    unsigned long thrshld = NUM2ULONG(threshold);
    (void) SetMagickResourceLimit(MemoryResource, (MagickSizeType)thrshld);
    (void) SetMagickResourceLimit(MapResource, (MagickSizeType)(2*thrshld));
    return class;
}


/**
 * Set the log event mask.
 *
 * Ruby usage:
 *   - @verbatim Magick.set_log_event_mask(event) @endverbatim
 *   - @verbatim Magick.set_log_event_mask(event,...) @endverbatim
 *
 * Notes:
 *   - "event" is one of
 *     - "all"
 *     - "annotate"
 *     - "blob"
 *     - "cache"
 *     - "coder"
 *     - "configure"
 *     - "deprecate"
 *     - "locale"
 *     - "none"
 *     - "render"
 *     - "transform"
 *     - "user"
 *     - "x11"
 *   - Multiple events can be specified.
 *   - Event names may be capitalized.
 *
 * @param argc number of input arguments.
 * @param argv array of input arguments.
 * @param class the class on which the method is run.
 * @return the class.
 */
VALUE
Magick_set_log_event_mask(int argc, VALUE *argv, VALUE class)
{
    int x;

    if (argc == 0)
    {
        rb_raise(rb_eArgError, "wrong number of arguments (at least 1 required)");
    }
    for (x = 0; x < argc; x++)
    {
        (void) SetLogEventMask(StringValuePtr(argv[x]));
    }
    return class;
}

/**
 * Set the format for log messages.
 * 
 * Ruby usage:
 *   - @verbatim Magick.set_log_format(format) @endverbatim
 *
 * Notes:
 *   - Format is a string containing one or more of:
 *     - %t  - current time
 *     - %r  - elapsed time
 *     - %u  - user time
 *     - %p  - pid
 *     - %m  - module (source file name)
 *     - %f  - function name
 *     - %l  - line number
 *     - %d  - event domain (one of the events listed above)
 *     - %e  - event name
 *     - Plus other characters, including \\n, etc.
 *
 * @param class the class on which the method is run.
 * @param format the format to set.
 * @return the class.
 */
VALUE
Magick_set_log_format(VALUE class, VALUE format)
{
    SetLogFormat(StringValuePtr(format));
    return class;
}

