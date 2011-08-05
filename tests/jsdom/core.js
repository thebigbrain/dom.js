load("testrunner.js");
load("../../dom.js");
load("buildStaffDocument.js");
load("buildHCStaffDocument.js");
load("domTestHelper.js");

run({
    /**
     *
     Attr nodes may be associated with Element nodes contained within a DocumentFragment.
     Create a new DocumentFragment and add a newly created Element node(with one attribute).
     Once the element is added, its attribute should be available as an attribute associated
     with an Element within a DocumentFragment.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-35CB04B5
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
     */
    // djf: Modified this test to use [] instead of item()
    attrcreatedocumentfragment: function(test) {
        var success;
        var doc;
        var docFragment;
        var newOne;
        var domesticNode;
        var domesticAttr;
        var attrs;
        var attrName;
        var appendedChild;


        doc = buildStaffDocument();
        docFragment = doc.createDocumentFragment();
        newOne = doc.createElement("newElement");
        newOne.setAttribute("newdomestic","Yes");
        appendedChild = docFragment.appendChild(newOne);
        domesticNode = docFragment.firstChild;

        domesticAttr = domesticNode.attributes;

        attrs = domesticAttr[0];
        attrName = attrs.name;

        test.equal(attrName, "newdomestic", 'attrCreateDocumentFragmentAssert');

        test.done();
    },

    /**
     *
     The "appendData(arg)" method appends a string to the end
     of the character data of the node.

     Retrieve the character data from the second child
     of the first employee.  The appendData(arg) method is
     called with arg=", Esquire".  The method should append
     the specified data to the already existing character
     data.  The new value return by the "getLength()" method
     should be 24.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-32791A2F
     */
    characterdataappenddata: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childValue;
        var childLength;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.appendData(", Esquire");
        childValue = child.data;

        childLength = childValue.length;
        test.equal(childLength, 24, 'characterdataAppendDataAssert');

        test.done();
    },

    /**
     *
     On successful invocation of the "appendData(arg)"
     method the "getData()" method provides access to the
     concatentation of data and the specified string.

     Retrieve the character data from the second child
     of the first employee.  The appendData(arg) method is
     called with arg=", Esquire".  The method should append
     the specified data to the already existing character
     data.  The new value return by the "getData()" method
     should be "Margaret Martin, Esquire".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-32791A2F
     */
    characterdataappenddatagetdata: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.appendData(", Esquire");
        childData = child.data;

        test.equal(childData, "Margaret Martin, Esquire", 'characterdataAppendDataGetDataAssert');

        test.done();
    },


    /**
     *
     The "deleteData(offset,count)" method removes a range of
     characters from the node.  Delete data at the beginning
     of the character data.

     Retrieve the character data from the last child of the
     first employee.  The "deleteData(offset,count)"
     method is then called with offset=0 and count=16.
     The method should delete the characters from position
     0 thru position 16.  The new value of the character data
     should be "Dallas, Texas 98551".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     */
    characterdatadeletedatabegining: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.deleteData(0,16);
        childData = child.data;

        test.equal(childData, "Dallas, Texas 98551", 'characterdataDeleteDataBeginingAssert');

        test.done();
    },

    /**
     *
     The "deleteData(offset,count)" method removes a range of
     characters from the node.  Delete data at the end
     of the character data.

     Retrieve the character data from the last child of the
     first employee.  The "deleteData(offset,count)"
     method is then called with offset=30 and count=5.
     The method should delete the characters from position
     30 thru position 35.  The new value of the character data
     should be "1230 North Ave. Dallas, Texas".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     */
    characterdatadeletedataend: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.deleteData(30,5);
        childData = child.data;

        test.equal(childData, "1230 North Ave. Dallas, Texas ", 'characterdataDeleteDataEndAssert');

        test.done();
    },

    /**
     *
     If the sum of the offset and count used in the
     "deleteData(offset,count) method is greater than the
     length of the character data then all the characters
     from the offset to the end of the data are deleted.

     Retrieve the character data from the last child of the
     first employee.  The "deleteData(offset,count)"
     method is then called with offset=4 and count=50.
     The method should delete the characters from position 4
     to the end of the data since the offset+count(50+4)
     is greater than the length of the character data(35).
     The new value of the character data should be "1230".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     */
    characterdatadeletedataexceedslength: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.deleteData(4,50);
        childData = child.data;

        test.equal(childData, "1230", 'characterdataDeleteDataExceedsLengthAssert');

        test.done();
    },

    /**
     *
     On successful invocation of the "deleteData(offset,count)"
     method, the "getData()" and "getLength()" methods reflect
     the changes.

     Retrieve the character data from the last child of the
     first employee.  The "deleteData(offset,count)"
     method is then called with offset=30 and count=5.
     The method should delete the characters from position
     30 thru position 35.  The new value of the character data
     should be "1230 North Ave. Dallas, Texas" which is
     returned by the "getData()" method and "getLength()"
     method should return 30".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7D61178C
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     */
    characterdatadeletedatagetlengthanddata: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;
        var childLength;
        var result = new Array();


        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.deleteData(30,5);
        childData = child.data;

        test.equal(childData, "1230 North Ave. Dallas, Texas ", 'data');
        childLength = child.length;

        test.equal(childLength, 30, 'length');

        test.done();
    },

    /**
     *
     The "deleteData(offset,count)" method removes a range of
     characters from the node.  Delete data in the middle
     of the character data.

     Retrieve the character data from the last child of the
     first employee.  The "deleteData(offset,count)"
     method is then called with offset=16 and count=8.
     The method should delete the characters from position
     16 thru position 24.  The new value of the character data
     should be "1230 North Ave. Texas 98551".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     */
    characterdatadeletedatamiddle: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.deleteData(16,8);
        childData = child.data;

        test.equal(childData, "1230 North Ave. Texas 98551", 'characterdataDeleteDataMiddleAssert');

        test.done();
    },


    /**
     *

     The "getData()" method retrieves the character data

     currently stored in the node.

     Retrieve the character data from the second child

     of the first employee and invoke the "getData()"

     method.  The method returns the character data

     string.


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     */
    characterdatagetdata: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        childData = child.data;

        test.equal(childData, "Margaret Martin", 'characterdataGetDataAssert');

        test.done();
    },

    /**
     *
     The "getLength()" method returns the number of characters
     stored in this nodes data.
     Retrieve the character data from the second
     child of the first employee and examine the
     value returned by the getLength() method.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7D61178C
     */
    characterdatagetlength: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childValue;
        var childLength;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        childValue = child.data;

        childLength = childValue.length;
        test.equal(childLength, 15, 'characterdataGetLengthAssert');

        test.done();
    },

    /**
     *
     The "deleteData(offset,count)" method raises an
     INDEX_SIZE_ERR DOMException if the specified count
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its "deleteData(offset,count)"
     method with offset=10 and count=-3.  It should raise the
     desired exception since the count is negative.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     */
    // djf: currently failing. This test may no longer be valid, but
    // I'm checking
    characterdataindexsizeerrdeletedatacountnegative: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.deleteData(10,-3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "deleteData(offset,count)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is greater that the number of characters in the string.

     Retrieve the character data of the last child of the
     first employee and invoke its "deleteData(offset,count)"
     method with offset=40 and count=3.  It should raise the
     desired exception since the offset is greater than the
     number of characters in the string.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-7C603781')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    characterdataindexsizeerrdeletedataoffsetgreater: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.deleteData(40,3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throw_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "deleteData(offset,count)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its "deleteData(offset,count)"
     method with offset=-5 and count=3.  It should raise the
     desired exception since the offset is negative.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-7C603781')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     */
    characterdataindexsizeerrdeletedataoffsetnegative: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.deleteData(-5,3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "insertData(offset,arg)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is greater than the number of characters in the string.

     Retrieve the character data of the last child of the
     first employee and invoke its insertData"(offset,arg)"
     method with offset=40 and arg="ABC".  It should raise
     the desired exception since the offset is greater than
     the number of characters in the string.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-7C603781')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    characterdataindexsizeerrinsertdataoffsetgreater: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.insertData(40,"ABC");
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throw_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "insertData(offset,arg)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its insertData"(offset,arg)"
     method with offset=-5 and arg="ABC".  It should raise
     the desired exception since the offset is negative.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-E5CBA7FB')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     */
    characterdataindexsizeerrinsertdataoffsetnegative: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.insertData(-5,"ABC");
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "replaceData(offset,count,arg)" method raises an
     INDEX_SIZE_ERR DOMException if the specified count
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its
     "replaceData(offset,count,arg) method with offset=10
     and count=-3 and arg="ABC".  It should raise the
     desired exception since the count is negative.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     */
    // djf: currently failing. This test may no longer be valid, but
    // I'm checking
    characterdataindexsizeerrreplacedatacountnegative: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.replaceData(10,-3,"ABC");
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "replaceData(offset,count,arg)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is greater than the length of the string.

     Retrieve the character data of the last child of the
     first employee and invoke its
     "replaceData(offset,count,arg) method with offset=40
     and count=3 and arg="ABC".  It should raise the
     desired exception since the offset is greater than the
     length of the string.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-7C603781')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    characterdataindexsizeerrreplacedataoffsetgreater: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.replaceData(40,3,"ABC");
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throw_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "replaceData(offset,count,arg)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its
     "replaceData(offset,count,arg) method with offset=-5
     and count=3 and arg="ABC".  It should raise the
     desired exception since the offset is negative.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-E5CBA7FB')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     */
    characterdataindexsizeerrreplacedataoffsetnegative: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.replaceData(-5,3,"ABC");
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "substringData(offset,count)" method raises an
     INDEX_SIZE_ERR DOMException if the specified count
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its "substringData(offset,count)
     method with offset=10 and count=-3.  It should raise the
     desired exception since the count is negative.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     */
    // djf: currently failing. This test may no longer be valid, but
    // I'm checking
    characterdataindexsizeerrsubstringcountnegative: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var badSubstring;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                badSubstring = child.substringData(10,-3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "substringData(offset,count)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its "substringData(offset,count)
     method with offset=-5 and count=3.  It should raise the
     desired exception since the offset is negative.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     */
    characterdataindexsizeerrsubstringnegativeoffset: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var badString;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                badString = child.substringData(-5,3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "substringData(offset,count)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is greater than the number of characters in the string.

     Retrieve the character data of the last child of the
     first employee and invoke its "substringData(offset,count)
     method with offset=40 and count=3.  It should raise the
     desired exception since the offsets value is greater
     than the length.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    characterdataindexsizeerrsubstringoffsetgreater: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var badString;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                badString = child.substringData(40,3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throw_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "insertData(offset,arg)" method will insert a string
     at the specified character offset.  Insert the data at
     the beginning of the character data.

     Retrieve the character data from the second child of
     the first employee.  The "insertData(offset,arg)"
     method is then called with offset=0 and arg="Mss.".
     The method should insert the string "Mss." at position 0.
     The new value of the character data should be
     "Mss. Margaret Martin".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3EDB695F
     */
    characterdatainsertdatabeginning: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.insertData(0,"Mss. ");
        childData = child.data;

        test.equal(childData, "Mss. Margaret Martin", 'characterdataInsertDataBeginningAssert');

        test.done();
    },

    /**
     *
     The "insertData(offset,arg)" method will insert a string
     at the specified character offset.  Insert the data at
     the end of the character data.

     Retrieve the character data from the second child of
     the first employee.  The "insertData(offset,arg)"
     method is then called with offset=15 and arg=", Esquire".
     The method should insert the string ", Esquire" at
     position 15.  The new value of the character data should
     be "Margaret Martin, Esquire".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3EDB695F
     */
    characterdatainsertdataend: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.insertData(15,", Esquire");
        childData = child.data;

        test.equal(childData, "Margaret Martin, Esquire", 'characterdataInsertDataEndAssert');

        test.done();
    },

    /**
     *
     The "insertData(offset,arg)" method will insert a string
     at the specified character offset.  Insert the data in
     the middle of the character data.

     Retrieve the character data from the second child of
     the first employee.  The "insertData(offset,arg)"
     method is then called with offset=9 and arg="Ann".
     The method should insert the string "Ann" at position 9.
     The new value of the character data should be
     "Margaret Ann Martin".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3EDB695F
     */
    characterdatainsertdatamiddle: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.insertData(9,"Ann ");
        childData = child.data;

        test.equal(childData, "Margaret Ann Martin", 'characterdataInsertDataMiddleAssert');

        test.done();
    },


    /**
     *
     The "replaceData(offset,count,arg)" method replaces the
     characters starting at the specified offset with the
     specified string.  Test for replacement in the
     middle of the data.

     Retrieve the character data from the last child of the
     first employee.  The "replaceData(offset,count,arg)"
     method is then called with offset=5 and count=5 and
     arg="South".  The method should replace characters five
     thru 9 of the character data with "South".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     */
    characterdatareplacedatabegining: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.replaceData(0,4,"2500");
        childData = child.data;

        test.equal(childData, "2500 North Ave. Dallas, Texas 98551", 'characterdataReplaceDataBeginingAssert');

        test.done();
    },

    /**
     *
     The "replaceData(offset,count,arg)" method replaces the
     characters starting at the specified offset with the
     specified string.  Test for replacement at the
     end of the data.

     Retrieve the character data from the last child of the
     first employee.  The "replaceData(offset,count,arg)"
     method is then called with offset=30 and count=5 and
     arg="98665".  The method should replace characters 30
     thru 34 of the character data with "98665".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     */
    characterdatareplacedataend: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.replaceData(30,5,"98665");
        childData = child.data;

        test.equal(childData, "1230 North Ave. Dallas, Texas 98665", 'characterdataReplaceDataEndAssert');

        test.done();
    },

    /**
     *
     The "replaceData(offset,count,arg)" method replaces the
     characters starting at the specified offset with the
     specified string.  Test the situation where the length
     of the arg string is greater than the specified offset.

     Retrieve the character data from the last child of the
     first employee.  The "replaceData(offset,count,arg)"
     method is then called with offset=0 and count=4 and
     arg="260030".  The method should replace characters one
     thru four with "260030".  Note that the length of the
     specified string is greater that the specified offset.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     */
    characterdatareplacedataexceedslengthofarg: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.replaceData(0,4,"260030");
        childData = child.data;

        test.equal(childData, "260030 North Ave. Dallas, Texas 98551", 'characterdataReplaceDataExceedsLengthOfArgAssert');

        test.done();
    },

    /**
     *
     If the sum of the offset and count exceeds the length then
     all the characters to the end of the data are replaced.

     Retrieve the character data from the last child of the
     first employee.  The "replaceData(offset,count,arg)"
     method is then called with offset=0 and count=50 and
     arg="2600".  The method should replace all the characters
     with "2600". This is because the sum of the offset and
     count exceeds the length of the character data.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     */
    characterdatareplacedataexceedslengthofdata: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.replaceData(0,50,"2600");
        childData = child.data;

        test.equal(childData, "2600", 'characterdataReplaceDataExceedsLengthOfDataAssert');

        test.done();
    },

    /**
     *
     The "replaceData(offset,count,arg)" method replaces the
     characters starting at the specified offset with the
     specified string.  Test for replacement in the
     middle of the data.

     Retrieve the character data from the last child of the
     first employee.  The "replaceData(offset,count,arg)"
     method is then called with offset=5 and count=5 and
     arg="South".  The method should replace characters five
     thru 9 of the character data with "South".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     */
    characterdatareplacedatamiddle: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.replaceData(5,5,"South");
        childData = child.data;

        test.equal(childData, "1230 South Ave. Dallas, Texas 98551", 'characterdataReplaceDataMiddleAssert');

        test.done();
    },


    /**
     *
     The "setNodeValue()" method changes the character data
     currently stored in the node.
     Retrieve the character data from the second child
     of the first employee and invoke the "setNodeValue()"
     method, call "getData()" and compare.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     */
    characterdatasetnodevalue: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;
        var childValue;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.nodeValue = "Marilyn Martin";

        childData = child.data;

        test.equal(childData, "Marilyn Martin", 'data');
        childValue = child.nodeValue;

        test.equal(childValue, "Marilyn Martin", 'value');

        test.done();
    },

    /**
     *
     If the sum of the "offset" and "count" exceeds the
     "length" then the "substringData(offset,count)" method
     returns all the characters to the end of the data.

     Retrieve the character data from the second child
     of the first employee and access part of the data
     by using the substringData(offset,count) method
     with offset=9 and count=10.  The method should return
     the substring "Martin" since offset+count > length
     (19 > 15).

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     */
    characterdatasubstringexceedsvalue: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var substring;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        substring = child.substringData(9,10);
        test.equal(substring, "Martin", 'characterdataSubStringExceedsValueAssert');

        test.done();
    },

    /**
     *
     The "substringData(offset,count)" method returns the
     specified string.

     Retrieve the character data from the second child
     of the first employee and access part of the data
     by using the substringData(offset,count) method.  The
     method should return the specified substring starting
     at position "offset" and extract "count" characters.
     The method should return the string "Margaret".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     */
    characterdatasubstringvalue: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var substring;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        substring = child.substringData(0,8);
        test.equal(substring, "Margaret", 'characterdataSubStringValueAssert');

        test.done();
    },

    /**
     *
     A comment is all the characters between the starting
     '<!--' and ending '-->'
     Retrieve the nodes of the DOM document.  Search for a
     comment node and the content is its value.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1334481328
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     */
    commentgetcomment: function(test) {
        var success;
        var doc;
        var elementList;
        var child;
        var childName;
        var childValue;
        var commentCount = 0;
        var childType;

        doc = buildStaffDocument();
        elementList = doc.childNodes;

        for(var indexN10057 = 0;indexN10057 < elementList.length; indexN10057++) {
            child = elementList.item(indexN10057);
            childType = child.nodeType;


            if(
                (8 == childType)
            ) {
                childName = child.nodeName;

                test.equal(childName, "#comment", 'nodeName');
                childValue = child.nodeValue;

                test.equal(childValue, " This is comment number 1.", 'nodeValue');
                commentCount = commentCount + 1;

            }

        }
        test.equal(commentCount, 1, 'commentCount');

        test.done();
    },



    /**
     *
     The "createComment(data)" method creates a new Comment
     node given the specified string.
     Retrieve the entire DOM document and invoke its
     "createComment(data)" method.  It should create a new
     Comment node whose "data" is the specified string.
     The content, name and type are retrieved and output.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1334481328
     */
    documentcreatecomment: function(test) {
        var success;
        var doc;
        var newCommentNode;
        var newCommentValue;
        var newCommentName;
        var newCommentType;

        doc = buildStaffDocument();
        newCommentNode = doc.createComment("This is a new Comment node");
        newCommentValue = newCommentNode.nodeValue;

        test.equal(newCommentValue, "This is a new Comment node", 'value');
        newCommentName = newCommentNode.nodeName;

        test.equal(newCommentName, "#comment", 'name');
        newCommentType = newCommentNode.nodeType;

        test.equal(newCommentType, 8, 'type');

        test.done();
    },

    /**
     *
     The "createDocumentFragment()" method creates an empty
     DocumentFragment object.
     Retrieve the entire DOM document and invoke its
     "createDocumentFragment()" method.  The content, name,
     type and value of the newly created object are output.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-35CB04B5
     */
    documentcreatedocumentfragment: function(test) {
        var success;
        var doc;
        var newDocFragment;
        var children;
        var length;
        var newDocFragmentName;
        var newDocFragmentType;
        var newDocFragmentValue;

        doc = buildStaffDocument();
        newDocFragment = doc.createDocumentFragment();
        children = newDocFragment.childNodes;

        length = children.length;

        test.equal(length, 0, 'length');
        newDocFragmentName = newDocFragment.nodeName;

        test.equal(newDocFragmentName, "#document-fragment", 'name');
        newDocFragmentType = newDocFragment.nodeType;

        test.equal(newDocFragmentType, 11, 'type');
        newDocFragmentValue = newDocFragment.nodeValue;

        test.equal(newDocFragmentValue, null, 'value');

        test.done();
    },

    /**
     *
     The "createElement(tagName)" method creates an Element
     of the type specified.
     Retrieve the entire DOM document and invoke its
     "createElement(tagName)" method with tagName="address".
     The method should create an instance of an Element node
     whose tagName is "address".  The NodeName, NodeType
     and NodeValue are returned.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
     */
    documentcreateelement: function(test) {
        var success;
        var doc;
        var newElement;
        var newElementName;
        var newElementType;
        var newElementValue;

        doc = buildStaffDocument();
        newElement = doc.createElement("address");
        newElementName = newElement.nodeName;

        test.equal(newElementName, "address", 'name');
        newElementType = newElement.nodeType;

        test.equal(newElementType, 1, 'type');
        newElementValue = newElement.nodeValue;

        test.equal(newElementValue, null, 'valueInitiallyNull');

        test.done();
    },

    /**
     *
     The tagName parameter in the "createElement(tagName)"
     method is case-sensitive for XML documents.
     Retrieve the entire DOM document and invoke its
     "createElement(tagName)" method twice.  Once for tagName
     equal to "address" and once for tagName equal to "ADDRESS"
     Each call should create a distinct Element node.  The
     newly created Elements are then assigned attributes
     that are retrieved.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
     */
    documentcreateelementcasesensitive: function(test) {
        var success;
        var doc;
        var newElement1;
        var newElement2;
        var attribute1;
        var attribute2;

        doc = buildStaffDocument();
        newElement1 = doc.createElement("ADDRESS");
        newElement2 = doc.createElement("address");
        newElement1.setAttribute("district","Fort Worth");
        newElement2.setAttribute("county","Dallas");
        attribute1 = newElement1.getAttribute("district");

        attribute2 = newElement2.getAttribute("county");
        test.equal(attribute1, "Fort Worth", 'attrib1');
        test.equal(attribute2, "Dallas", 'attrib2');

        test.done();
    },


    /**
     *
     The "createProcessingInstruction(target,data)" method
     creates a new ProcessingInstruction node with the
     specified name and data string.

     Retrieve the entire DOM document and invoke its
     "createProcessingInstruction(target,data)" method.
     It should create a new PI node with the specified target
     and data.  The target, data and type are retrieved and
     output.

     * @author NIST
     * @author Mary Brady
     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#
     * @see http://lists.w3.org/Archives/Public/www-dom-ts/2001Apr/0020.html
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-135944439
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    documentcreateprocessinginstruction: function(test) {
        var success;
        var doc;
        var newPINode;
        var piValue;
        var piName;
        var piType;

        doc = buildStaffDocument();
        newPINode = doc.createProcessingInstruction("TESTPI","This is a new PI node");
        test.notEqual(newPINode, null, 'createdPINotNull');
        piName = newPINode.nodeName;

        test.equal(piName, "TESTPI", 'name');
        piValue = newPINode.nodeValue;

        test.equal(piValue, "This is a new PI node", 'value');
        piType = newPINode.nodeType;

        test.equal(piType, 7, 'type');

        test.done();
    },

    /**
     *
     The "createTextNode(data)" method creates a Text node
     given the specfied string.
     Retrieve the entire DOM document and invoke its
     "createTextNode(data)" method.  It should create a
     new Text node whose "data" is the specified string.
     The NodeName and NodeType are also checked.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1975348127
     */
    documentcreatetextnode: function(test) {
        var success;
        var doc;
        var newTextNode;
        var newTextName;
        var newTextValue;
        var newTextType;

        doc = buildStaffDocument();
        newTextNode = doc.createTextNode("This is a new Text node");
        newTextValue = newTextNode.nodeValue;

        test.equal(newTextValue, "This is a new Text node", 'value');
        newTextName = newTextNode.nodeName;

        test.equal(newTextName, "#text", 'name');
        newTextType = newTextNode.nodeType;

        test.equal(newTextType, 3, 'type');

        test.done();
    },

    /**
     *
     The "getDoctype()" method returns the Document
     Type Declaration associated with this document.
     Retrieve the entire DOM document and invoke its
     "getDoctype()" method.  The name of the document
     type should be returned.  The "getName()" method
     should be equal to "staff" or "svg".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A31
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    documentgetdoctype: function(test) {
        var success;
        var doc;
        var docType;
        var docTypeName;
        var nodeValue;

        doc = buildStaffDocument();
        docType = doc.doctype;

        test.notEqual(docType, null, 'docTypeNotNull');
        docTypeName = docType.name;


        test.equal(docTypeName, "staff", 'doctypeName');
        nodeValue = docType.nodeValue;

        test.equal(nodeValue, null, 'initiallyNull');

        test.done();
    },

    /**
     *
     The "getDoctype()" method returns null for XML documents
     without a document type declaration.
     Retrieve the XML document without a DTD and invoke the
     "getDoctype()" method.  It should return null.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A31
     */
    documentgetdoctypenodtd: function(test) {
        var success;
        var doc;
        var docType;

        doc = buildHCNoDTDStaffDocument();
        docType = doc.doctype;

        test.equal(docType, null, 'documentGetDocTypeNoDTDAssert');

        test.done();
    },

    /**
     *
     The "getElementsByTagName(tagName)" method returns a
     NodeList of all the Elements with a given tagName.

     Retrieve the entire DOM document and invoke its
     "getElementsByTagName(tagName)" method with tagName
     equal to "name".  The method should return a NodeList
     that contains 5 elements.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-A6C9094
     */
    documentgetelementsbytagnamelength: function(test) {
        var success;
        var doc;
        var nameList;

        doc = buildStaffDocument();
        nameList = doc.getElementsByTagName("name");
        test.equal(nameList.length, 5, 'documentGetElementsByTagNameLengthAssert');

        test.done();
    },

    /**
     *
     Retrieve the entire DOM document, invoke
     getElementsByTagName("*") and check the length of the NodeList.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-A6C9094
     */
    documentgetelementsbytagnametotallength: function(test) {
        var success;
        var doc;
        var nameList;

        doc = buildStaffDocument();
        nameList = doc.getElementsByTagName("*");

        test.equal(nameList.length, 37, 'documentGetElementsByTagNameTotalLengthAssert');

        test.done();
    },

    /**
     *
     The "getElementsByTagName(tagName)" method returns a
     NodeList of all the Elements with a given tagName
     in a pre-order traversal of the tree.

     Retrieve the entire DOM document and invoke its
     "getElementsByTagName(tagName)" method with tagName
     equal to "name".  The method should return a NodeList
     that contains 5 elements.  The FOURTH item in the
     list is retrieved and output.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-A6C9094
     */
    documentgetelementsbytagnamevalue: function(test) {
        var success;
        var doc;
        var nameList;
        var nameNode;
        var firstChild;
        var childValue;

        doc = buildStaffDocument();
        nameList = doc.getElementsByTagName("name");
        nameNode = nameList.item(3);
        firstChild = nameNode.firstChild;

        childValue = firstChild.nodeValue;

        test.equal(childValue, "Jeny Oconnor", 'documentGetElementsByTagNameValueAssert');

        test.done();
    },

    /**
     *
     The "getImplementation()" method returns the
     DOMImplementation object that handles this document.
     Retrieve the entire DOM document and invoke its
     "getImplementation()" method.  It should return a
     DOMImplementation whose "hasFeature("XML","1.0")
     method returns the boolean value "true".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1B793EBA
     */
    documentgetimplementation: function(test) {
        var success;
        var doc;
        var docImpl;
        var state;

        doc = buildStaffDocument();
        docImpl = doc.implementation;
        state = docImpl.hasFeature("XML","1.0");
        test.ok(state, 'documentGetImplementationAssert');

        test.done();
    },

    /**
     *
     The "getDocumentElement()" method provides direct access
     to the child node that is the root element of the document.
     Retrieve the entire DOM document and invoke its
     "getDocumentElement()" method.  It should return an
     Element node whose NodeName is "staff" (or "svg").

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-87CD092
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
     */
    documentgetrootnode: function(test) {
        var success;
        var doc;
        var root;
        var rootName;

        doc = buildStaffDocument();
        root = doc.documentElement;

        rootName = root.nodeName;


        test.equal(rootName, "staff", 'documentGetRootNodeAssert');

        test.done();
    },


    /**
     *
     The "createElement(tagName)" method raises an
     INVALID_CHARACTER_ERR DOMException if the specified
     tagName contains an invalid character.

     Retrieve the entire DOM document and invoke its
     "createElement(tagName)" method with the tagName equal
     to the string "invalid^Name".  Due to the invalid
     character the desired EXCEPTION should be raised.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-2141741547')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    documentinvalidcharacterexceptioncreateelement: function(test) {
        var success;
        var doc;
        var badElement;

        doc = buildStaffDocument();

        {
            success = false;
            try {
                badElement = doc.createElement("invalid^Name");
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 5);
            }
            test.ok(success, 'throw_INVALID_CHARACTER_ERR');
        }

        test.done();
    },

    /**
     *
     The "createProcessingInstruction(target,data) method
     raises an INVALID_CHARACTER_ERR DOMException if the
     specified tagName contains an invalid character.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-135944439
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-135944439')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    documentinvalidcharacterexceptioncreatepi: function(test) {
        var success;
        var doc;
        var badPI;

        doc = buildHCStaffDocument();
        success = false;
        try {
            badPI = doc.createProcessingInstruction("invalid^Name","data");
        }
        catch(ex) {
            success = (typeof(ex.code) != 'undefined' && ex.code == 5);
        }
        test.ok(success, 'throw_INVALID_CHARACTER_ERR');
        test.done();
    },

    /**
     *
     Creating a processing instruction with an empty target should cause an INVALID_CHARACTER_ERR.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-135944439
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-135944439')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
     */
    documentinvalidcharacterexceptioncreatepi1: function(test) {
        var success;
        var doc;
        var badPI;

        doc = buildHCStaffDocument();
        success = false;
        try {
            badPI = doc.createProcessingInstruction("","data");
        }
        catch(ex) {
            success = (typeof(ex.code) != 'undefined' && ex.code == 5);
        }
        test.ok(success, 'throw_INVALID_CHARACTER_ERR');
        test.done();
    },

    /**
     *
     The "getName()" method contains the name of the DTD.

     Retrieve the Document Type for this document and examine
     the string returned by the "getName()" method.
     It should be set to "staff".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A31
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1844763134
     */
    documenttypegetdoctype: function(test) {
        var success;
        var doc;
        var docType;
        var name;

        doc = buildStaffDocument();
        docType = doc.doctype;

        test.notEqual(docType, null, 'docTypeNotNull');
        name = docType.name;


        test.equal(name, "staff", 'documenttypeGetDocTypeAssert');

        test.done();
    },


    /**
     *
     hasFeature("XML", "") should return true for implementations that can read staff files.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-5CED94D7
     * @see http://www.w3.org/2000/11/DOM-Level-2-errata#core-14
     */
    domimplementationfeaturenoversion: function(test) {
        var success;
        var doc;
        var domImpl;
        var state;

        doc = buildStaffDocument();
        domImpl = doc.implementation;
        state = domImpl.hasFeature("XML","");
        test.ok(state, 'hasXMLEmpty');

        test.done();
    },

    /**
     *
     hasFeature("XML", null) should return true for implementations that can read staff documents.

     * @author NIST
     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-5CED94D7
     * @see http://www.w3.org/2000/11/DOM-Level-2-errata#core-14
     */
    domimplementationfeaturenull: function(test) {
        var success;
        var doc;
        var domImpl;
        var state;
        var nullVersion = null;


        doc = buildStaffDocument();
        domImpl = doc.implementation;
        state = domImpl.hasFeature("XML",nullVersion);
        test.ok(state, 'hasXMLnull');

        test.done();
    },

    /**
     *
     hasFeature("xml", "1.0") should return true for implementations that can read staff documents.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-5CED94D7
     */
    domimplementationfeaturexml: function(test) {
        var success;
        var doc;
        var domImpl;
        var state;

        doc = buildStaffDocument();
        domImpl = doc.implementation;
        state = domImpl.hasFeature("xml","1.0");
        test.ok(state, 'hasXML1');

        test.done();
    },

    /**
     *
     The "setAttribute(name,value)" method adds a new attribute
     to the Element

     Retrieve the last child of the last employee, then
     add an attribute to it by invoking the
     "setAttribute(name,value)" method.  It should create
     a "name" attribute with an assigned value equal to
     "value".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
     */
    elementaddnewattribute: function(test) {
        var success;
        var doc;
        var elementList;
        var testEmployee;
        var attrValue;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        testEmployee = elementList.item(4);
        testEmployee.setAttribute("district","dallas");
        attrValue = testEmployee.getAttribute("district");
        test.equal(attrValue, "dallas", 'elementAddNewAttributeAssert');

        test.done();
    },


    /**
     *
     The "setAttribute(name,value)" method adds a new attribute
     to the Element.  If the "name" is already present, then
     its value should be changed to the new one that is in
     the "value" parameter.

     Retrieve the last child of the fourth employee, then add
     an attribute to it by invoking the
     "setAttribute(name,value)" method.  Since the name of the
     used attribute("street") is already present in this
     element, then its value should be changed to the new one
     of the "value" parameter.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
     */
    elementchangeattributevalue: function(test) {
        var success;
        var doc;
        var elementList;
        var testEmployee;
        var attrValue;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        testEmployee = elementList.item(3);
        testEmployee.setAttribute("street","Neither");
        attrValue = testEmployee.getAttribute("street");
        test.equal(attrValue, "Neither", 'elementChangeAttributeValueAssert');

        test.done();
    },



    /**
     *
     The "getElementsByTagName(name)" method returns a list
     of all descendant Elements with the given tag name.
     Test for an empty list.

     Create a NodeList of all the descendant elements
     using the string "noMatch" as the tagName.
     The method should return a NodeList whose length is
     "0" since there are not any descendant elements
     that match the given tag name.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
     */
    elementgetelementsbytagname: function(test) {
        var success;
        var doc;
        var elementList;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        test.equal(elementList.length, 5, 'elementGetElementsByTagNameAssert');

        test.done();
    },

    /**
     *
     Element.getElementsByTagName("employee") should return a NodeList whose length is
     "5" in the order the children were encountered.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
     */
    elementgetelementsbytagnameaccessnodelist: function(test) {
        var success;
        var doc;
        var elementList;
        var testEmployee;
        var child;
        var childName;
        var childValue;
        var childType;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        testEmployee = elementList.item(3);
        child = testEmployee.firstChild;

        childType = child.nodeType;


        if(
            (3 == childType)
        ) {
            child = child.nextSibling;


        }
        childName = child.nodeName;

        test.equal(childName, "employeeId", 'nodename');
        child = child.firstChild;

        childValue = child.nodeValue;

        test.equal(childValue, "EMP0004", 'emp0004');

        test.done();
    },

    /**
     *
     The "getElementsByTagName(name)" method returns a list
     of all descendant Elements with the given tag name.

     Create a NodeList of all the descendant elements
     using the string "employee" as the tagName.
     The method should return a NodeList whose length is
     "5".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
     */
    elementgetelementsbytagnamenomatch: function(test) {
        var success;
        var doc;
        var elementList;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("noMatch");
        test.equal(elementList.length, 0, 'elementGetElementsByTagNameNoMatchNoMatchAssert');

        test.done();
    },

    /**
     *
     The "getElementsByTagName(name)" method may use the
     special value "*" to match all tags in the element
     tree.

     Create a NodeList of all the descendant elements
     of the last employee by using the special value "*".
     The method should return all the descendant children(6)
     in the order the children were encountered.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
     */
    elementgetelementsbytagnamespecialvalue: function(test) {
        var success;
        var doc;
        var elementList;
        var lastEmployee;
        var lastempList;
        var child;
        var childName;
        var result = new Array();

        expectedResult = new Array();
        expectedResult[0] = "employeeId";
        expectedResult[1] = "name";
        expectedResult[2] = "position";
        expectedResult[3] = "salary";
        expectedResult[4] = "gender";
        expectedResult[5] = "address";


        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        lastEmployee = elementList.item(4);
        lastempList = lastEmployee.getElementsByTagName("*");
        for(var indexN1006A = 0;indexN1006A < lastempList.length; indexN1006A++) {
            child = lastempList.item(indexN1006A);
            childName = child.nodeName;

            result[result.length] = childName;

        }
        test.equal(result.join(), expectedResult.join(), 'tagNames');

        test.done();
    },

    /**
     *

     The "getTagName()" method returns the

     tagName of an element.



     Invoke the "getTagName()" method one the

     root node. The value returned should be "staff".


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-104682815
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
     */
    elementgettagname: function(test) {
        var success;
        var doc;
        var root;
        var tagname;

        doc = buildStaffDocument();
        root = doc.documentElement;

        tagname = root.tagName;


        test.equal(tagname, "staff", 'elementGetTagNameAssert');

        test.done();
    },


    /**
     *

     The "setAttribute(name,value)" method raises an

     "INVALID_CHARACTER_ERR DOMException if the specified

     name contains an invalid character.



     Retrieve the last child of the first employee and

     call its "setAttribute(name,value)" method with

     "name" containing an invalid character.


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-F68F082')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    elementinvalidcharacterexception: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddress;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        testAddress = elementList.item(0);

        {
            success = false;
            try {
                testAddress.setAttribute("invalid^Name","value");
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 5);
            }
            test.ok(success, 'throw_INVALID_CHARACTER_ERR');
        }

        test.done();
    },




    /**
     *
     The "getAttributes()" method(Node Interface) may
     be used to retrieve the set of all attributes of an
     element.

     Create a list of all the attributes of the last child
     of the first employee by using the "getAttributes()"
     method.  Examine the length of the attribute list.
     This test uses the "getLength()" method from the
     NameNodeMap interface.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     * @see http://lists.w3.org/Archives/Public/www-dom-ts/2002Mar/0002.html
     */
    elementretrieveallattributes: function(test) {
        var success;
        var doc;
        var addressList;
        var testAddress;
        var attributes;

        doc = buildStaffDocument();
        addressList = doc.getElementsByTagName("address");
        testAddress = addressList.item(0);
        attributes = testAddress.attributes;

        // djf: changed expected from 2 to 1.
        // the test appears to have been wrong
        test.equal(attributes.length, 1, 'elementRetrieveAllAttributesAssert');

        test.done();
    },

    /**
     *
     The "getAttribute(name)" method returns an attribute
     value by name.

     Retrieve the second address element, then
     invoke the 'getAttribute("street")' method.  This should
     return the value of the attribute("No").

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-666EE0F9
     */
    elementretrieveattrvalue: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddress;
        var attrValue;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        testAddress = elementList.item(2);
        attrValue = testAddress.getAttribute("street");
        test.equal(attrValue, "No", 'attrValue');

        test.done();
    },

    /**
     *
     The "getElementsByTagName()" method returns a NodeList
     of all descendant elements with a given tagName.

     Invoke the "getElementsByTagName()" method and create
     a NodeList of "position" elements.  Retrieve the second
     "position" element in the list and return the NodeName.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-104682815
     */
    elementretrievetagname: function(test) {
        var success;
        var doc;
        var elementList;
        var testEmployee;
        var name;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("position");
        testEmployee = elementList.item(1);
        name = testEmployee.nodeName;

        test.equal(name, "position", 'nodename');
        name = testEmployee.tagName;

        test.equal(name, "position", 'tagname');

        test.done();
    },



    /**
     *
     Create a new DocumentFragment and add a newly created Element node(with one attribute).
     Once the element is added, its attribute should be available as an attribute associated
     with an Element within a DocumentFragment.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-35CB04B5
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
     * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
     */
    // djf: changed to use [] instead of item()
    hc_attrcreatedocumentfragment: function(test) {
        var success;
        var doc;
        var docFragment;
        var newOne;
        var domesticNode;
        var attributes;
        var attribute;
        var attrName;
        var appendedChild;
        var langAttrCount = 0;

        doc = buildHCStaffDocument();
        docFragment = doc.createDocumentFragment();
        newOne = doc.createElement("html");
        newOne.setAttribute("lang","EN");

        appendedChild = docFragment.appendChild(newOne);

        domesticNode = docFragment.firstChild;

        attributes = domesticNode.attributes;

        for(var indexN10078 = 0;indexN10078 < attributes.length; indexN10078++) {
            attribute = attributes[indexN10078];
            attrName = attribute.name;
            if(attrName == 'lang') {
                langAttrCount += 1;
            }
        }
        test.equal(langAttrCount, 1, 'hasLangAttr');
        test.done();
    },





    /**
     *
     The "appendData(arg)" method appends a string to the end
     of the character data of the node.

     Retrieve the character data from the second child
     of the first employee.  The appendData(arg) method is
     called with arg=", Esquire".  The method should append
     the specified data to the already existing character
     data.  The new value return by the "getLength()" method
     should be 24.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-32791A2F
     */
    hc_characterdataappenddata: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childValue;
        var childLength;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.appendData(", Esquire");
        childValue = child.data;

        childLength = childValue.length;
        test.equal(childLength, 24, 'characterdataAppendDataAssert');

        test.done();
    },

    /**
     *
     On successful invocation of the "appendData(arg)"
     method the "getData()" method provides access to the
     concatentation of data and the specified string.

     Retrieve the character data from the second child
     of the first employee.  The appendData(arg) method is
     called with arg=", Esquire".  The method should append
     the specified data to the already existing character
     data.  The new value return by the "getData()" method
     should be "Margaret Martin, Esquire".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-32791A2F
     */
    hc_characterdataappenddatagetdata: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.appendData(", Esquire");
        childData = child.data;

        test.equal(childData, "Margaret Martin, Esquire", 'characterdataAppendDataGetDataAssert');

        test.done();
    },

    /**
     *
     The "deleteData(offset,count)" method removes a range of
     characters from the node.  Delete data at the beginning
     of the character data.

     Retrieve the character data from the last child of the
     first employee.  The "deleteData(offset,count)"
     method is then called with offset=0 and count=16.
     The method should delete the characters from position
     0 thru position 16.  The new value of the character data
     should be "Dallas, Texas 98551".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     */
    hc_characterdatadeletedatabegining: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.deleteData(0,16);
        childData = child.data;

        test.equal(childData, "Dallas, Texas 98551", 'data');

        test.done();
    },

    /**
     *
     The "deleteData(offset,count)" method removes a range of
     characters from the node.  Delete data at the end
     of the character data.

     Retrieve the character data from the last child of the
     first employee.  The "deleteData(offset,count)"
     method is then called with offset=30 and count=5.
     The method should delete the characters from position
     30 thru position 35.  The new value of the character data
     should be "1230 North Ave. Dallas, Texas".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     */
    hc_characterdatadeletedataend: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.deleteData(30,5);
        childData = child.data;

        test.equal(childData, "1230 North Ave. Dallas, Texas ", 'characterdataDeleteDataEndAssert');

        test.done();
    },

    /**
     *
     If the sum of the offset and count used in the
     "deleteData(offset,count) method is greater than the
     length of the character data then all the characters
     from the offset to the end of the data are deleted.

     Retrieve the character data from the last child of the
     first employee.  The "deleteData(offset,count)"
     method is then called with offset=4 and count=50.
     The method should delete the characters from position 4
     to the end of the data since the offset+count(50+4)
     is greater than the length of the character data(35).
     The new value of the character data should be "1230".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     */
    hc_characterdatadeletedataexceedslength: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.deleteData(4,50);
        childData = child.data;

        test.equal(childData, "1230", 'characterdataDeleteDataExceedsLengthAssert');

        test.done();
    },

    /**
     *
     On successful invocation of the "deleteData(offset,count)"
     method, the "getData()" and "getLength()" methods reflect
     the changes.

     Retrieve the character data from the last child of the
     first employee.  The "deleteData(offset,count)"
     method is then called with offset=30 and count=5.
     The method should delete the characters from position
     30 thru position 35.  The new value of the character data
     should be "1230 North Ave. Dallas, Texas" which is
     returned by the "getData()" method and "getLength()"
     method should return 30".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7D61178C
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     */
    hc_characterdatadeletedatagetlengthanddata: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;
        var childLength;
        var result = new Array();


        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.deleteData(30,5);
        childData = child.data;

        test.equal(childData, "1230 North Ave. Dallas, Texas ", 'data');
        childLength = child.length;

        test.equal(childLength, 30, 'length');

        test.done();
    },

    /**
     *
     The "deleteData(offset,count)" method removes a range of
     characters from the node.  Delete data in the middle
     of the character data.

     Retrieve the character data from the last child of the
     first employee.  The "deleteData(offset,count)"
     method is then called with offset=16 and count=8.
     The method should delete the characters from position
     16 thru position 24.  The new value of the character data
     should be "1230 North Ave. Texas 98551".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     */
    hc_characterdatadeletedatamiddle: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.deleteData(16,8);
        childData = child.data;

        test.equal(childData, "1230 North Ave. Texas 98551", 'characterdataDeleteDataMiddleAssert');

        test.done();
    },

    /**
     *

     The "getData()" method retrieves the character data

     currently stored in the node.

     Retrieve the character data from the second child

     of the first employee and invoke the "getData()"

     method.  The method returns the character data

     string.


     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     */
    hc_characterdatagetdata: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        childData = child.data;

        test.equal(childData, "Margaret Martin", 'characterdataGetDataAssert');

        test.done();
    },

    /**
     *
     The "getLength()" method returns the number of characters
     stored in this nodes data.
     Retrieve the character data from the second
     child of the first employee and examine the
     value returned by the getLength() method.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7D61178C
     */
    hc_characterdatagetlength: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childValue;
        var childLength;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        childValue = child.data;

        childLength = childValue.length;
        test.equal(childLength, 15, 'characterdataGetLengthAssert');

        test.done();
    },

    /**
     *
     The "deleteData(offset,count)" method raises an
     INDEX_SIZE_ERR DOMException if the specified count
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its "deleteData(offset,count)"
     method with offset=10 and count=-3.  It should raise the
     desired exception since the count is negative.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     */
    // djf: currently failing. This test may no longer be valid, but
    // I'm checking
    hc_characterdataindexsizeerrdeletedatacountnegative: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childSubstring;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                childSubstring = child.substringData(10,-3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "deleteData(offset,count)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is greater that the number of characters in the string.

     Retrieve the character data of the last child of the
     first employee and invoke its "deleteData(offset,count)"
     method with offset=40 and count=3.  It should raise the
     desired exception since the offset is greater than the
     number of characters in the string.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-7C603781')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    hc_characterdataindexsizeerrdeletedataoffsetgreater: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.deleteData(40,3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throw_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "deleteData(offset,count)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its "deleteData(offset,count)"
     method with offset=-5 and count=3.  It should raise the
     desired exception since the offset is negative.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-7C603781')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     */
    hc_characterdataindexsizeerrdeletedataoffsetnegative: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.deleteData(-5,3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "insertData(offset,arg)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is greater than the number of characters in the string.

     Retrieve the character data of the last child of the
     first employee and invoke its insertData"(offset,arg)"
     method with offset=40 and arg="ABC".  It should raise
     the desired exception since the offset is greater than
     the number of characters in the string.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-7C603781')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    hc_characterdataindexsizeerrinsertdataoffsetgreater: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.deleteData(40,3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throw_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "insertData(offset,arg)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its insertData"(offset,arg)"
     method with offset=-5 and arg="ABC".  It should raise
     the desired exception since the offset is negative.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-E5CBA7FB')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     */
    hc_characterdataindexsizeerrinsertdataoffsetnegative: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.replaceData(-5,3,"ABC");
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "replaceData(offset,count,arg)" method raises an
     INDEX_SIZE_ERR DOMException if the specified count
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its
     "replaceData(offset,count,arg) method with offset=10
     and count=-3 and arg="ABC".  It should raise the
     desired exception since the count is negative.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     */
    // djf: currently failing. This test may no longer be valid, but
    // I'm checking
    hc_characterdataindexsizeerrreplacedatacountnegative: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var badString;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                badString = child.substringData(10,-3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "replaceData(offset,count,arg)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is greater than the length of the string.

     Retrieve the character data of the last child of the
     first employee and invoke its
     "replaceData(offset,count,arg) method with offset=40
     and count=3 and arg="ABC".  It should raise the
     desired exception since the offset is greater than the
     length of the string.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-7C603781')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=242
     */
    hc_characterdataindexsizeerrreplacedataoffsetgreater: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.deleteData(40,3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throw_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "replaceData(offset,count,arg)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its
     "replaceData(offset,count,arg) method with offset=-5
     and count=3 and arg="ABC".  It should raise the
     desired exception since the offset is negative.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-E5CBA7FB')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     */
    hc_characterdataindexsizeerrreplacedataoffsetnegative: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                child.replaceData(-5,3,"ABC");
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "substringData(offset,count)" method raises an
     INDEX_SIZE_ERR DOMException if the specified count
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its "substringData(offset,count)
     method with offset=10 and count=-3.  It should raise the
     desired exception since the count is negative.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     */
    // djf: currently failing. This test may no longer be valid, but
    // I'm checking
    hc_characterdataindexsizeerrsubstringcountnegative: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var badSubstring;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                badSubstring = child.substringData(10,-3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "substringData(offset,count)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is negative.

     Retrieve the character data of the last child of the
     first employee and invoke its "substringData(offset,count)
     method with offset=-5 and count=3.  It should raise the
     desired exception since the offset is negative.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     */
    hc_characterdataindexsizeerrsubstringnegativeoffset: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var badString;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                badString = child.substringData(-5,3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "substringData(offset,count)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset
     is greater than the number of characters in the string.

     Retrieve the character data of the last child of the
     first employee and invoke its "substringData(offset,count)
     method with offset=40 and count=3.  It should raise the
     desired exception since the offsets value is greater
     than the length.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    hc_characterdataindexsizeerrsubstringoffsetgreater: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var badString;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;


        {
            success = false;
            try {
                badString = child.substringData(40,3);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throw_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "insertData(offset,arg)" method will insert a string
     at the specified character offset.  Insert the data at
     the beginning of the character data.

     Retrieve the character data from the second child of
     the first employee.  The "insertData(offset,arg)"
     method is then called with offset=0 and arg="Mss.".
     The method should insert the string "Mss." at position 0.
     The new value of the character data should be
     "Mss. Margaret Martin".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3EDB695F
     */
    hc_characterdatainsertdatabeginning: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.insertData(0,"Mss. ");
        childData = child.data;

        test.equal(childData, "Mss. Margaret Martin", 'characterdataInsertDataBeginningAssert');

        test.done();
    },

    /**
     *
     The "insertData(offset,arg)" method will insert a string
     at the specified character offset.  Insert the data at
     the end of the character data.

     Retrieve the character data from the second child of
     the first employee.  The "insertData(offset,arg)"
     method is then called with offset=15 and arg=", Esquire".
     The method should insert the string ", Esquire" at
     position 15.  The new value of the character data should
     be "Margaret Martin, Esquire".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3EDB695F
     */
    hc_characterdatainsertdataend: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.insertData(15,", Esquire");
        childData = child.data;

        test.equal(childData, "Margaret Martin, Esquire", 'characterdataInsertDataEndAssert');

        test.done();
    },

    /**
     *
     The "insertData(offset,arg)" method will insert a string
     at the specified character offset.  Insert the data in
     the middle of the character data.

     Retrieve the character data from the second child of
     the first employee.  The "insertData(offset,arg)"
     method is then called with offset=9 and arg="Ann".
     The method should insert the string "Ann" at position 9.
     The new value of the character data should be
     "Margaret Ann Martin".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3EDB695F
     */
    hc_characterdatainsertdatamiddle: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.insertData(9,"Ann ");
        childData = child.data;

        test.equal(childData, "Margaret Ann Martin", 'characterdataInsertDataMiddleAssert');

        test.done();
    },

    /**
     *
     The "replaceData(offset,count,arg)" method replaces the
     characters starting at the specified offset with the
     specified string.  Test for replacement in the
     middle of the data.

     Retrieve the character data from the last child of the
     first employee.  The "replaceData(offset,count,arg)"
     method is then called with offset=5 and count=5 and
     arg="South".  The method should replace characters five
     thru 9 of the character data with "South".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     */
    hc_characterdatareplacedatabegining: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.replaceData(0,4,"2500");
        childData = child.data;

        test.equal(childData, "2500 North Ave. Dallas, Texas 98551", 'characterdataReplaceDataBeginingAssert');

        test.done();
    },

    /**
     *
     The "replaceData(offset,count,arg)" method replaces the
     characters starting at the specified offset with the
     specified string.  Test for replacement at the
     end of the data.

     Retrieve the character data from the last child of the
     first employee.  The "replaceData(offset,count,arg)"
     method is then called with offset=30 and count=5 and
     arg="98665".  The method should replace characters 30
     thru 34 of the character data with "98665".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     */
    hc_characterdatareplacedataend: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.replaceData(30,5,"98665");
        childData = child.data;

        test.equal(childData, "1230 North Ave. Dallas, Texas 98665", 'characterdataReplaceDataEndAssert');

        test.done();
    },

    /**
     *
     The "replaceData(offset,count,arg)" method replaces the
     characters starting at the specified offset with the
     specified string.  Test the situation where the length
     of the arg string is greater than the specified offset.

     Retrieve the character data from the last child of the
     first employee.  The "replaceData(offset,count,arg)"
     method is then called with offset=0 and count=4 and
     arg="260030".  The method should replace characters one
     thru four with "260030".  Note that the length of the
     specified string is greater that the specified offset.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     */
    hc_characterdatareplacedataexceedslengthofarg: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.replaceData(0,4,"260030");
        childData = child.data;

        test.equal(childData, "260030 North Ave. Dallas, Texas 98551", 'characterdataReplaceDataExceedsLengthOfArgAssert');

        test.done();
    },

    /**
     *
     If the sum of the offset and count exceeds the length then
     all the characters to the end of the data are replaced.

     Retrieve the character data from the last child of the
     first employee.  The "replaceData(offset,count,arg)"
     method is then called with offset=0 and count=50 and
     arg="2600".  The method should replace all the characters
     with "2600". This is because the sum of the offset and
     count exceeds the length of the character data.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     */
    hc_characterdatareplacedataexceedslengthofdata: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.replaceData(0,50,"2600");
        childData = child.data;

        test.equal(childData, "2600", 'characterdataReplaceDataExceedsLengthOfDataAssert');

        test.done();
    },

    /**
     *
     The "replaceData(offset,count,arg)" method replaces the
     characters starting at the specified offset with the
     specified string.  Test for replacement in the
     middle of the data.

     Retrieve the character data from the last child of the
     first employee.  The "replaceData(offset,count,arg)"
     method is then called with offset=5 and count=5 and
     arg="South".  The method should replace characters five
     thru 9 of the character data with "South".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
     */
    hc_characterdatareplacedatamiddle: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.replaceData(5,5,"South");
        childData = child.data;

        test.equal(childData, "1230 South Ave. Dallas, Texas 98551", 'characterdataReplaceDataMiddleAssert');

        test.done();
    },

    /**
     *
     The "setNodeValue()" method changes the character data
     currently stored in the node.
     Retrieve the character data from the second child
     of the first employee and invoke the "setNodeValue()"
     method, call "getData()" and compare.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
     */
    hc_characterdatasetnodevalue: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var childData;
        var childValue;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        child.nodeValue = "Marilyn Martin";

        childData = child.data;

        test.equal(childData, "Marilyn Martin", 'data');
        childValue = child.nodeValue;

        test.equal(childValue, "Marilyn Martin", 'value');

        test.done();
    },

    /**
     *
     If the sum of the "offset" and "count" exceeds the
     "length" then the "substringData(offset,count)" method
     returns all the characters to the end of the data.

     Retrieve the character data from the second child
     of the first employee and access part of the data
     by using the substringData(offset,count) method
     with offset=9 and count=10.  The method should return
     the substring "Martin" since offset+count > length
     (19 > 15).

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     */
    hc_characterdatasubstringexceedsvalue: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var substring;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        substring = child.substringData(9,10);
        test.equal(substring, "Martin", 'characterdataSubStringExceedsValueAssert');

        test.done();
    },

    /**
     *
     The "substringData(offset,count)" method returns the
     specified string.

     Retrieve the character data from the second child
     of the first employee and access part of the data
     by using the substringData(offset,count) method.  The
     method should return the specified substring starting
     at position "offset" and extract "count" characters.
     The method should return the string "Margaret".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
     */
    hc_characterdatasubstringvalue: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var child;
        var substring;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(0);
        child = nameNode.firstChild;

        substring = child.substringData(0,8);
        test.equal(substring, "Margaret", 'characterdataSubStringValueAssert');

        test.done();
    },

    /**
     *
     A comment is all the characters between the starting
     '<!--' and ending '-->'
     Retrieve the nodes of the DOM document.  Search for a
     comment node and the content is its value.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1334481328
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=509
     */
    hc_commentgetcomment: function(test) {
        var doc = buildHCStaffDocument();
        var elementList = doc.childNodes;
        var commentCount = 0;
        for(var i=0;i<elementList.length;i++) {
            if (8 == elementList.item(i).nodeType) {
                test.equal(elementList.item(i).nodeName, '#comment', 'nodeName');
                test.equal(elementList.item(i).nodeValue, ' This is comment number 1.', 'nodeValue');
                test.equal(elementList.item(i).attributes, null, 'attributes');
                commentCount += 1;
            }
        }
        test.equal(commentCount, 1, 'atMostOneComment');
        test.done();
    },


    /**
     *
     The "createComment(data)" method creates a new Comment
     node given the specified string.
     Retrieve the entire DOM document and invoke its
     "createComment(data)" method.  It should create a new
     Comment node whose "data" is the specified string.
     The content, name and type are retrieved and output.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1334481328
     */
    hc_documentcreatecomment: function(test) {
        var success;
        var doc;
        var newCommentNode;
        var newCommentValue;
        var newCommentName;
        var newCommentType;

        doc = buildHCStaffDocument();
        newCommentNode = doc.createComment("This is a new Comment node");
        newCommentValue = newCommentNode.nodeValue;

        test.equal(newCommentValue, "This is a new Comment node", 'value');
        newCommentName = newCommentNode.nodeName;

        test.equal(newCommentName, "#comment", 'strong');
        newCommentType = newCommentNode.nodeType;

        test.equal(newCommentType, 8, 'type');

        test.done();
    },

    /**
     *
     The "createDocumentFragment()" method creates an empty
     DocumentFragment object.
     Retrieve the entire DOM document and invoke its
     "createDocumentFragment()" method.  The content, name,
     type and value of the newly created object are output.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-35CB04B5
     */
    hc_documentcreatedocumentfragment: function(test) {
        var success;
        var doc;
        var newDocFragment;
        var children;
        var length;
        var newDocFragmentName;
        var newDocFragmentType;
        var newDocFragmentValue;

        doc = buildHCStaffDocument();
        newDocFragment = doc.createDocumentFragment();
        children = newDocFragment.childNodes;

        length = children.length;

        test.equal(length, 0, 'length');
        newDocFragmentName = newDocFragment.nodeName;

        test.equal(newDocFragmentName, "#document-fragment", 'strong');
        newDocFragmentType = newDocFragment.nodeType;

        test.equal(newDocFragmentType, 11, 'type');
        newDocFragmentValue = newDocFragment.nodeValue;

        test.equal(newDocFragmentValue, null, 'value');

        test.done();
    },

    /**
     *
     The "createElement(tagName)" method creates an Element
     of the type specified.
     Retrieve the entire DOM document and invoke its
     "createElement(tagName)" method with tagName="acronym".
     The method should create an instance of an Element node
     whose tagName is "acronym".  The NodeName, NodeType
     and NodeValue are returned.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
     */
    hc_documentcreateelement: function(test) {
        var success;
        var doc;
        var newElement;
        var newElementName;
        var newElementType;
        var newElementValue;

        doc = buildHCStaffDocument();
        newElement = doc.createElement("acronym");
        newElementName = newElement.nodeName;

        test.equal(newElementName, "acronym", 'element strong');
        newElementType = newElement.nodeType;

        test.equal(newElementType, 1, 'type');
        newElementValue = newElement.nodeValue;

        test.equal(newElementValue, null, 'valueInitiallyNull');

        test.done();
    },

    /**
     *
     The tagName parameter in the "createElement(tagName)"
     method is case-sensitive for XML documents.
     Retrieve the entire DOM document and invoke its
     "createElement(tagName)" method twice.  Once for tagName
     equal to "acronym" and once for tagName equal to "ACRONYM"
     Each call should create a distinct Element node.  The
     newly created Elements are then assigned attributes
     that are retrieved.

     Modified on 27 June 2003 to avoid setting an invalid style
     values and checked the node names to see if they matched expectations.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
     */
    hc_documentcreateelementcasesensitive: function(test) {
        var success;
        var doc;
        var newElement1;
        var newElement2;
        var attribute1;
        var attribute2;
        var nodeName1;
        var nodeName2;

        doc = buildHCStaffDocument();
        newElement1 = doc.createElement("ACRONYM");
        newElement2 = doc.createElement("acronym");
        newElement1.setAttribute("lang","EN");
        newElement2.setAttribute("title","Dallas");
        attribute1 = newElement1.getAttribute("lang");
        attribute2 = newElement2.getAttribute("title");
        test.equal(attribute1, "EN", 'attrib1');
        test.equal(attribute2, "Dallas", 'attrib2');
        nodeName1 = newElement1.nodeName;

        nodeName2 = newElement2.nodeName;

        test.equal(nodeName1, "ACRONYM", 'element nodeName1');
        test.equal(nodeName2, "acronym", 'element nodeName2');

        test.done();
    },

    /**
     *
     The "createTextNode(data)" method creates a Text node
     given the specfied string.
     Retrieve the entire DOM document and invoke its
     "createTextNode(data)" method.  It should create a
     new Text node whose "data" is the specified string.
     The NodeName and NodeType are also checked.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1975348127
     */
    hc_documentcreatetextnode: function(test) {
        var success;
        var doc;
        var newTextNode;
        var newTextName;
        var newTextValue;
        var newTextType;

        doc = buildHCStaffDocument();
        newTextNode = doc.createTextNode("This is a new Text node");
        newTextValue = newTextNode.nodeValue;

        test.equal(newTextValue, "This is a new Text node", 'value');
        newTextName = newTextNode.nodeName;

        test.equal(newTextName, "#text", 'strong');
        newTextType = newTextNode.nodeType;

        test.equal(newTextType, 3, 'type');

        test.done();
    },

    /**
     *
     Access Document.doctype for hc_staff, if not text/html should return DocumentType node.
     HTML implementations may return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A31
     */
    hc_documentgetdoctype: function(test) {
        var success;
        var doc;
        var docType;
        var docTypeName;
        var nodeValue;
        var attributes;

        doc = buildHCStaffDocument();
        docType = doc.doctype;
        test.notEqual(docType, null, 'docTypeNotNull');
        if(docType != null) {
            docTypeName = docType.name;
            nodeValue = docType.nodeValue;
            test.equal(nodeValue, null, 'nodeValue');
            attributes = docType.attributes;
            test.equal(attributes, null, 'attributes');
        }
        test.done();
    },

    /**
     *
     The "getElementsByTagName(tagName)" method returns a
     NodeList of all the Elements with a given tagName.

     Retrieve the entire DOM document and invoke its
     "getElementsByTagName(tagName)" method with tagName
     equal to "strong".  The method should return a NodeList
     that contains 5 elements.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-A6C9094
     */
    hc_documentgetelementsbytagnamelength: function(test) {
        var success;
        var doc;
        var nameList;

        doc = buildHCStaffDocument();
        nameList = doc.getElementsByTagName("strong");
        test.equal(nameList.length, 5, 'documentGetElementsByTagNameLengthAssert');

        test.done();
    },

    /**
     *
     Retrieve the entire DOM document and invoke its
     "getElementsByTagName(tagName)" method with tagName
     equal to "*".  The method should return a NodeList
     that contains all the elements of the document.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-A6C9094
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
     */
    hc_documentgetelementsbytagnametotallength: function(test) {
        var success;
        var doc;
        var nameList;
        expectedNames = new Array();
        expectedNames[0] = "html";
        expectedNames[1] = "head";
        expectedNames[2] = "meta";
        expectedNames[3] = "title";
        expectedNames[4] = "script";
        expectedNames[5] = "script";
        expectedNames[6] = "script";
        expectedNames[7] = "body";
        expectedNames[8] = "p";
        expectedNames[9] = "em";
        expectedNames[10] = "strong";
        expectedNames[11] = "code";
        expectedNames[12] = "sup";
        expectedNames[13] = "var";
        expectedNames[14] = "acronym";
        expectedNames[15] = "p";
        expectedNames[16] = "em";
        expectedNames[17] = "strong";
        expectedNames[18] = "code";
        expectedNames[19] = "sup";
        expectedNames[20] = "var";
        expectedNames[21] = "acronym";
        expectedNames[22] = "p";
        expectedNames[23] = "em";
        expectedNames[24] = "strong";
        expectedNames[25] = "code";
        expectedNames[26] = "sup";
        expectedNames[27] = "var";
        expectedNames[28] = "acronym";
        expectedNames[29] = "p";
        expectedNames[30] = "em";
        expectedNames[31] = "strong";
        expectedNames[32] = "code";
        expectedNames[33] = "sup";
        expectedNames[34] = "var";
        expectedNames[35] = "acronym";
        expectedNames[36] = "p";
        expectedNames[37] = "em";
        expectedNames[38] = "strong";
        expectedNames[39] = "code";
        expectedNames[40] = "sup";
        expectedNames[41] = "var";
        expectedNames[42] = "acronym";

        svgExpectedNames = new Array();
        svgExpectedNames[0] = "svg";
        svgExpectedNames[1] = "rect";
        svgExpectedNames[2] = "script";
        svgExpectedNames[3] = "head";
        svgExpectedNames[4] = "meta";
        svgExpectedNames[5] = "title";
        svgExpectedNames[6] = "body";
        svgExpectedNames[7] = "p";
        svgExpectedNames[8] = "em";
        svgExpectedNames[9] = "strong";
        svgExpectedNames[10] = "code";
        svgExpectedNames[11] = "sup";
        svgExpectedNames[12] = "var";
        svgExpectedNames[13] = "acronym";
        svgExpectedNames[14] = "p";
        svgExpectedNames[15] = "em";
        svgExpectedNames[16] = "strong";
        svgExpectedNames[17] = "code";
        svgExpectedNames[18] = "sup";
        svgExpectedNames[19] = "var";
        svgExpectedNames[20] = "acronym";
        svgExpectedNames[21] = "p";
        svgExpectedNames[22] = "em";
        svgExpectedNames[23] = "strong";
        svgExpectedNames[24] = "code";
        svgExpectedNames[25] = "sup";
        svgExpectedNames[26] = "var";
        svgExpectedNames[27] = "acronym";
        svgExpectedNames[28] = "p";
        svgExpectedNames[29] = "em";
        svgExpectedNames[30] = "strong";
        svgExpectedNames[31] = "code";
        svgExpectedNames[32] = "sup";
        svgExpectedNames[33] = "var";
        svgExpectedNames[34] = "acronym";
        svgExpectedNames[35] = "p";
        svgExpectedNames[36] = "em";
        svgExpectedNames[37] = "strong";
        svgExpectedNames[38] = "code";
        svgExpectedNames[39] = "sup";
        svgExpectedNames[40] = "var";
        svgExpectedNames[41] = "acronym";

        var actualNames = new Array();

        var thisElement;
        var thisTag;

        doc = buildHCStaffDocument();
        nameList = doc.getElementsByTagName("*");
        for(var indexN10148 = 0;indexN10148 < nameList.length; indexN10148++) {
            thisElement = nameList.item(indexN10148);
            thisTag = thisElement.tagName;

            actualNames[actualNames.length] = thisTag;

        }

        test.equal(actualNames.join(), expectedNames.join(), 'element tagNames');

        test.done();
    },

    /**
     *
     The "getElementsByTagName(tagName)" method returns a
     NodeList of all the Elements with a given tagName
     in a pre-order traversal of the tree.

     Retrieve the entire DOM document and invoke its
     "getElementsByTagName(tagName)" method with tagName
     equal to "strong".  The method should return a NodeList
     that contains 5 elements.  The FOURTH item in the
     list is retrieved and output.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-A6C9094
     */
    hc_documentgetelementsbytagnamevalue: function(test) {
        var success;
        var doc;
        var nameList;
        var nameNode;
        var firstChild;
        var childValue;

        doc = buildHCStaffDocument();
        nameList = doc.getElementsByTagName("strong");
        nameNode = nameList.item(3);
        firstChild = nameNode.firstChild;

        childValue = firstChild.nodeValue;

        test.equal(childValue, "Jeny Oconnor", 'documentGetElementsByTagNameValueAssert');

        test.done();
    },

    /**
     *
     Retrieve the entire DOM document and invoke its
     "getImplementation()" method.  If contentType="text/html",
     DOMImplementation.hasFeature("HTML","1.0") should be true.
     Otherwise, DOMImplementation.hasFeature("XML", "1.0")
     should be true.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1B793EBA
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=245
     */
    hc_documentgetimplementation: function(test) {
        var success;
        var doc;
        var docImpl;
        var xmlstate;
        var htmlstate;

        doc = buildHCStaffDocument();
        docImpl = doc.implementation;
        xmlstate = docImpl.hasFeature("XML","1.0");
        htmlstate = docImpl.hasFeature("HTML","1.0");

        test.ok(xmlstate, 'supports_XML_1.0');

        test.done();
    },

    /**
     *
     Load a document and invoke its
     "getDocumentElement()" method.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-87CD092
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
     */
    hc_documentgetrootnode: function(test) {
        var success;
        var doc;
        var root;
        var rootName;

        doc = buildHCStaffDocument();
        root = doc.documentElement;

        rootName = root.nodeName;


        test.equal(rootName, "html", 'element docElemName');

        test.done();
    },


    /**
     *
     The "createElement(tagName)" method raises an
     INVALID_CHARACTER_ERR DOMException if the specified
     tagName contains an invalid character.

     Retrieve the entire DOM document and invoke its
     "createElement(tagName)" method with the tagName equal
     to the string "invalid^Name".  Due to the invalid
     character the desired EXCEPTION should be raised.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-2141741547')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    hc_documentinvalidcharacterexceptioncreateelement: function(test) {
        var success;
        var doc;
        var badElement;

        doc = buildHCStaffDocument();

        {
            success = false;
            try {
                badElement = doc.createElement("invalid^Name");
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 5);
            }
            test.ok(success, 'throw_INVALID_CHARACTER_ERR');
        }

        test.done();
    },

    /**
     *
     Creating an element with an empty name should cause an INVALID_CHARACTER_ERR.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-2141741547')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
     */
    hc_documentinvalidcharacterexceptioncreateelement1: function(test) {
        var success;
        var doc;
        var badElement;

        doc = buildHCStaffDocument();

        {
            success = false;
            try {
                badElement = doc.createElement("");
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 5);
            }
            test.ok(success, 'throw_INVALID_CHARACTER_ERR');
        }

        test.done();
    },

    /**
     *
     Load a document and invoke its
     "getImplementation()" method.  This should create a
     DOMImplementation object whose "hasFeature(feature,
     version)" method is invoked with version equal to "".
     If the version is not specified, supporting any version
     feature will cause the method to return "true".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-5CED94D7
     * @see http://www.w3.org/2000/11/DOM-Level-2-errata#core-14
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=245
     */
    hc_domimplementationfeaturenoversion: function(test) {
        var success;
        var doc;
        var domImpl;
        var state;

        doc = buildHCStaffDocument();
        domImpl = doc.implementation;
        state = domImpl.hasFeature("XML","");
        test.ok(state, 'hasFeatureBlank');
        test.done();
    },

    /**
     *
     Load a document and invoke its
     "getImplementation()" method.  This should create a
     DOMImplementation object whose "hasFeature(feature,
     version)" method is invoked with version equal to null.
     If the version is not specified, supporting any version
     feature will cause the method to return "true".

     * @author Curt Arnold
     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-5CED94D7
     * @see http://www.w3.org/2000/11/DOM-Level-2-errata#core-14
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=245
     */
    hc_domimplementationfeaturenull: function(test) {
        var success;
        var doc;
        var domImpl;
        var state;

        doc = buildHCStaffDocument();
        domImpl = doc.implementation;
        state = domImpl.hasFeature("XML",null);
        test.ok(state, 'supports_XML_null');
        test.done();
    },

    /**
     *
     Retrieve the entire DOM document and invoke its
     "getImplementation()" method.  This should create a
     DOMImplementation object whose "hasFeature(feature,
     version)" method is invoked with "feature" equal to "html" or "xml".
     The method should return a boolean "true".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-5CED94D7
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=245
     */
    hc_domimplementationfeaturexml: function(test) {
        var success;
        var doc;
        var domImpl;
        var state;

        doc = buildHCStaffDocument();
        domImpl = doc.implementation;
        state = domImpl.hasFeature("xml","1.0");
        test.ok(state, 'supports_xml_1.0');
        test.done();
    },

    /**
     *
     The "setAttribute(name,value)" method adds a new attribute
     to the Element

     Retrieve the last child of the last employee, then
     add an attribute to it by invoking the
     "setAttribute(name,value)" method.  It should create
     a "strong" attribute with an assigned value equal to
     "value".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
     */
    hc_elementaddnewattribute: function(test) {
        var success;
        var doc;
        var elementList;
        var testEmployee;
        var attrValue;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        testEmployee = elementList.item(4);
        testEmployee.setAttribute("lang","EN-us");
        attrValue = testEmployee.getAttribute("lang");
        test.equal(attrValue, "EN-us", 'attrValue');

        test.done();
    },

    /**
     *
     The "setAttribute(name,value)" method adds a new attribute
     to the Element.  If the "strong" is already present, then
     its value should be changed to the new one that is in
     the "value" parameter.

     Retrieve the last child of the fourth employee, then add
     an attribute to it by invoking the
     "setAttribute(name,value)" method.  Since the name of the
     used attribute("class") is already present in this
     element, then its value should be changed to the new one
     of the "value" parameter.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
     */
    hc_elementchangeattributevalue: function(test) {
        var success;
        var doc;
        var elementList;
        var testEmployee;
        var attrValue;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        testEmployee = elementList.item(3);
        testEmployee.setAttribute("class","Neither");
        attrValue = testEmployee.getAttribute("class");
        test.equal(attrValue, "Neither", 'elementChangeAttributeValueAssert');

        test.done();
    },

    /**
     *
     The "getElementsByTagName(name)" method returns a list
     of all descendant Elements with the given tag name.
     Test for an empty list.

     Create a NodeList of all the descendant elements
     using the string "noMatch" as the tagName.
     The method should return a NodeList whose length is
     "0" since there are not any descendant elements
     that match the given tag name.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
     */
    hc_elementgetelementsbytagname: function(test) {
        var success;
        var doc;
        var elementList;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        test.equal(elementList.length, 5, 'elementGetElementsByTagNameAssert');

        test.done();
    },

    /**
     *
     The "getElementsByTagName(name)" method returns a list
     of all descendant Elements in the order the children
     were encountered in a pre order traversal of the element
     tree.

     Create a NodeList of all the descendant elements
     using the string "p" as the tagName.
     The method should return a NodeList whose length is
     "5" in the order the children were encountered.
     Access the FOURTH element in the NodeList.  The FOURTH
     element, the first or second should be an "em" node with
     the content "EMP0004".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_elementgetelementsbytagnameaccessnodelist: function(test) {
        var success;
        var doc;
        var elementList;
        var testEmployee;
        var firstC;
        var childName;
        var nodeType;
        var employeeIDNode;
        var employeeID;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        testEmployee = elementList.item(3);
        firstC = testEmployee.firstChild;

        nodeType = firstC.nodeType;


        while(
            (3 == nodeType)
        ) {
            firstC = firstC.nextSibling;

            nodeType = firstC.nodeType;


        }
        childName = firstC.nodeName;

        test.equal(childName, "em", 'element childName');
        employeeIDNode = firstC.firstChild;

        employeeID = employeeIDNode.nodeValue;

        test.equal(employeeID, "EMP0004", 'employeeID');

        test.done();
    },

    /**
     *
     The "getElementsByTagName(name)" method returns a list
     of all descendant Elements with the given tag name.

     Create a NodeList of all the descendant elements
     using the string "employee" as the tagName.
     The method should return a NodeList whose length is
     "5".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
     */
    hc_elementgetelementsbytagnamenomatch: function(test) {
        var success;
        var doc;
        var elementList;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("noMatch");
        test.equal(elementList.length, 0, 'elementGetElementsByTagNameNoMatchNoMatchAssert');

        test.done();
    },

    /**
     *
     The "getElementsByTagName(name)" method may use the
     special value "*" to match all tags in the element
     tree.

     Create a NodeList of all the descendant elements
     of the last employee by using the special value "*".
     The method should return all the descendant children(6)
     in the order the children were encountered.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
     */
    hc_elementgetelementsbytagnamespecialvalue: function(test) {
        var success;
        var doc;
        var elementList;
        var lastEmployee;
        var lastempList;
        var child;
        var childName;
        var result = new Array();

        expectedResult = new Array();
        expectedResult[0] = "em";
        expectedResult[1] = "strong";
        expectedResult[2] = "code";
        expectedResult[3] = "sup";
        expectedResult[4] = "var";
        expectedResult[5] = "acronym";


        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        lastEmployee = elementList.item(4);
        lastempList = lastEmployee.getElementsByTagName("*");
        for(var indexN10067 = 0;indexN10067 < lastempList.length; indexN10067++) {
            child = lastempList.item(indexN10067);
            childName = child.nodeName;

            result[result.length] = childName;

        }
        test.equal(result.join(), expectedResult.join(), 'element tagNames');

        test.done();
    },

    /**
     *
     Invoke the "getTagName()" method one the
     root node. The value returned should be "html" or "svg".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-104682815
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
     */
    hc_elementgettagname: function(test) {
        var success;
        var doc;
        var root;
        var tagname;

        doc = buildHCStaffDocument();
        root = doc.documentElement;

        tagname = root.tagName;


        test.equal(tagname, "html", 'element tagname');

        test.done();
    },


    /**
     *
     The "setAttribute(name,value)" method raises an
     "INVALID_CHARACTER_ERR DOMException if the specified
     name contains an invalid character.

     Retrieve the last child of the first employee and
     call its "setAttribute(name,value)" method with
     "strong" containing an invalid character.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-F68F082')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    hc_elementinvalidcharacterexception: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddress;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        testAddress = elementList.item(0);

        {
            success = false;
            try {
                testAddress.setAttribute("invalid^Name","value");
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 5);
            }
            test.ok(success, 'throw_INVALID_CHARACTER_ERR');
        }

        test.done();
    },

    /**
     *
     Calling Element.setAttribute with an empty name will cause an INVALID_CHARACTER_ERR.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-F68F082')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
     */
    hc_elementinvalidcharacterexception1: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddress;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        testAddress = elementList.item(0);

        {
            success = false;
            try {
                testAddress.setAttribute("","value");
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 5);
            }
            test.ok(success, 'throw_INVALID_CHARACTER_ERR');
        }

        test.done();
    },


    /**
     *
     The "removeAttribute(name)" removes an attribute by name.
     If the attribute has a default value, it is immediately
     replaced.  However, there is no default values in the HTML
     compatible tests, so its value is "".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6D6AC0F9
     * @see http://lists.w3.org/Archives/Public/www-dom-ts/2002Mar/0002.html
     */
    hc_elementremoveattribute: function(test) {
        var success;
        var doc;
        var elementList;
        var testEmployee;
        var attrValue;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        testEmployee = elementList.item(3);
        testEmployee.removeAttribute("class");
        attrValue = testEmployee.getAttribute("class");
        // djf: change "" to null below to reflect 
        // the change from DOM Level 2 to DOM Core
        test.equal(attrValue, null, 'attrValue');

        test.done();
    },


    /**
     *
     The "getAttribute(name)" method returns an attribute
     value by name.

     Retrieve the second address element, then
     invoke the 'getAttribute("class")' method.  This should
     return the value of the attribute("No").

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-666EE0F9
     */
    hc_elementretrieveattrvalue: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddress;
        var attrValue;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        testAddress = elementList.item(2);
        attrValue = testAddress.getAttribute("class");
        test.equal(attrValue, "No", 'attrValue');

        test.done();
    },

    /**
     *
     The "getElementsByTagName()" method returns a NodeList
     of all descendant elements with a given tagName.

     Invoke the "getElementsByTagName()" method and create
     a NodeList of "code" elements.  Retrieve the second
     "code" element in the list and return the NodeName.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-104682815
     */
    hc_elementretrievetagname: function(test) {
        var success;
        var doc;
        var elementList;
        var testEmployee;
        var strong;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("code");
        testEmployee = elementList.item(1);
        strong = testEmployee.nodeName;

        test.equal(strong, "code", 'element nodename');
        strong = testEmployee.tagName;

        test.equal(strong, "code", 'element tagname');

        test.done();
    },



    /**
     *
     Retrieve the second "p" element and evaluate Node.attributes.length.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6D0FB19E
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=250
     */
    hc_namednodemapnumberofnodes: function(test) {
        var success;
        var doc;
        var elementList;
        var testEmployee;
        var attributes;
        var length;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        testEmployee = elementList.item(2);
        attributes = testEmployee.attributes;

        length = attributes.length;

        // djf: changing expected length from 3 to 2, because DOMCore
        // doesn't assume built-in support for <!ATTLIST> in DTDs
        test.equal(length, 2, 'length');

        test.done();
    },



    /**
     *
     Retrieve the second "p" and append a "br" Element
     node to the list of children.   The last node in the list
     is then retrieved and its NodeName examined.   The
     "getNodeName()" method should return "br".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    hc_nodeappendchild: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var createdNode;
        var lchild;
        var childName;
        var appendedChild;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        createdNode = doc.createElement("br");
        appendedChild = employeeNode.appendChild(createdNode);
        lchild = employeeNode.lastChild;

        childName = lchild.nodeName;

        test.equal(childName, "br", 'element nodeName');

        test.done();
    },

    /**
     *
     If the "newChild" is already in the tree, it is first
     removed before the new one is appended.

     Retrieve the "em" second employee and
     append the first child to the end of the list.   After
     the "appendChild(newChild)" method is invoked the first
     child should be the one that was second and the last
     child should be the one that was first.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodeappendchildchildexists: function(test) {
        var success;
        var doc;
        var elementList;
        var childList;
        var childNode;
        var newChild;
        var memberNode;
        var memberName;
        var refreshedActual = new Array();

        var actual = new Array();

        var nodeType;
        expected = new Array();
        expected[0] = "strong";
        expected[1] = "code";
        expected[2] = "sup";
        expected[3] = "var";
        expected[4] = "acronym";
        expected[5] = "em";

        var appendedChild;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        childNode = elementList.item(1);
        childList = childNode.getElementsByTagName("*");
        newChild = childList.item(0);
        appendedChild = childNode.appendChild(newChild);
        for(var indexN10085 = 0;indexN10085 < childList.length; indexN10085++) {
            memberNode = childList.item(indexN10085);
            memberName = memberNode.nodeName;

            actual[actual.length] = memberName;

        }
        test.equal(actual.join(), expected.join(), 'element liveByTagName');
        childList = childNode.childNodes;

        for(var indexN1009C = 0;indexN1009C < childList.length; indexN1009C++) {
            memberNode = childList.item(indexN1009C);
            nodeType = memberNode.nodeType;


            if(
                (1 == nodeType)
            ) {
                memberName = memberNode.nodeName;

                refreshedActual[refreshedActual.length] = memberName;

            }

        }
        test.equal(refreshedActual.join(), expected.join(), 'element refreshedChildNodes');

        test.done();
    },

    /**
     *
     If the "newChild" is a DocumentFragment object then
     all its content is added to the child list of this node.

     Create and populate a new DocumentFragment object and
     append it to the second employee.   After the
     "appendChild(newChild)" method is invoked retrieve the
     new nodes at the end of the list, they should be the
     two Element nodes from the DocumentFragment.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    hc_nodeappendchilddocfragment: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var newdocFragment;
        var newChild1;
        var newChild2;
        var child;
        var childName;
        var result = new Array();

        var appendedChild;
        var nodeType;
        expected = new Array();
        expected[0] = "em";
        expected[1] = "strong";
        expected[2] = "code";
        expected[3] = "sup";
        expected[4] = "var";
        expected[5] = "acronym";
        expected[6] = "br";
        expected[7] = "b";


        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        newdocFragment = doc.createDocumentFragment();
        newChild1 = doc.createElement("br");
        newChild2 = doc.createElement("b");
        appendedChild = newdocFragment.appendChild(newChild1);
        appendedChild = newdocFragment.appendChild(newChild2);
        appendedChild = employeeNode.appendChild(newdocFragment);

        for(var indexN100A2 = 0;indexN100A2 < childList.length; indexN100A2++) {
            child = childList.item(indexN100A2);
            nodeType = child.nodeType;


            if(
                (1 == nodeType)
            ) {
                childName = child.nodeName;

                result[result.length] = childName;

            }

        }
        test.equal(result.join(), expected.join(), 'element nodeNames');

        test.done();
    },

    /**
     *
     The "appendChild(newChild)" method returns the node
     added.

     Append a newly created node to the child list of the
     second employee and check the NodeName returned.   The
     "getNodeName()" method should return "br".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    hc_nodeappendchildgetnodename: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var newChild;
        var appendNode;
        var childName;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        newChild = doc.createElement("br");
        appendNode = employeeNode.appendChild(newChild);
        childName = appendNode.nodeName;

        test.equal(childName, "br", 'element nodeName');

        test.done();
    },

    /**
     *
     The "appendChild(newChild)" method raises a
     WRONG_DOCUMENT_ERR DOMException if the "newChild" was
     created from a different document than the one that
     created this node.

     Retrieve the second employee and attempt to append
     a node created from a different document.   An attempt
     to make such a replacement should raise the desired
     exception.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-184E7107')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    // djf: dom core now allows, this so invert the sense fo the test
    hc_nodeappendchildnewchilddiffdocument: function(test) {
        var success;
        var doc1;
        var doc2;
        var newChild;
        var elementList;
        var elementNode;
        var appendedChild;
        doc1 = buildHCStaffDocument();
        doc2 = buildHCStaffDocument();
        newChild = doc1.createElement("br");
        elementList = doc2.getElementsByTagName("p");
        elementNode = elementList.item(1);

        {
            success = true;
            try {
                appendedChild = elementNode.appendChild(newChild);
            }
            catch(ex) {
                success = false;
            }
            test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
        }

        test.done();
    },

    /**
     *
     The "appendChild(newChild)" method raises a
     HIERARCHY_REQUEST_ERR DOMException if the node to
     append is one of this node's ancestors.

     Retrieve the second employee and attempt to append
     an ancestor node(root node) to it.
     An attempt to make such an addition should raise the
     desired exception.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-184E7107')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='HIERARCHY_REQUEST_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     */
    hc_nodeappendchildnodeancestor: function(test) {
        var success;
        var doc;
        var newChild;
        var elementList;
        var employeeNode;
        var childList;
        var oldChild;
        var appendedChild;

        doc = buildHCStaffDocument();
        newChild = doc.documentElement;

        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);

        {
            success = false;
            try {
                appendedChild = employeeNode.appendChild(newChild);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 3);
            }
            test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
        }

        test.done();
    },



    /**
     *

     The "getChildNodes()" method returns a NodeList
     that contains all children of this node.

     Retrieve the second employee and check the NodeList
     returned by the "getChildNodes()" method.   The
     length of the list should be 13.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodechildnodes: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childNode;
        var childNodes;
        var nodeType;
        var childName;
        var actual = new Array();

        expected = new Array();
        expected[0] = "em";
        expected[1] = "strong";
        expected[2] = "code";
        expected[3] = "sup";
        expected[4] = "var";
        expected[5] = "acronym";


        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childNodes = employeeNode.childNodes;

        for(var indexN1006C = 0;indexN1006C < childNodes.length; indexN1006C++) {
            childNode = childNodes.item(indexN1006C);
            nodeType = childNode.nodeType;

            childName = childNode.nodeName;


            if(
                (1 == nodeType)
            ) {
                actual[actual.length] = childName;

            }

            else {
                test.equal(nodeType, 3, 'textNodeType');

            }

        }
        test.equal(actual.join(), expected.join(), 'element elementNames');

        test.done();
    },

    /**
     *
     The NodeList returned by the "getChildNodes()" method
     is live.   Changes on the node's children are immediately
     reflected on the nodes returned in the NodeList.

     Create a NodeList of the children of the second employee
     and then add a newly created element that was created
     by the "createElement()" method(Document Interface) to
     the second employee by using the "appendChild()" method.
     The length of the NodeList should reflect this new
     addition to the child list.   It should return the value 14.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    hc_nodechildnodesappendchild: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var createdNode;
        var childNode;
        var childName;
        var childType;
        var textNode;
        var actual = new Array();

        expected = new Array();
        expected[0] = "em";
        expected[1] = "strong";
        expected[2] = "code";
        expected[3] = "sup";
        expected[4] = "var";
        expected[5] = "acronym";
        expected[6] = "br";


        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        createdNode = doc.createElement("br");
        employeeNode = employeeNode.appendChild(createdNode);
        for(var indexN10087 = 0;indexN10087 < childList.length; indexN10087++) {
            childNode = childList.item(indexN10087);
            childName = childNode.nodeName;

            childType = childNode.nodeType;


            if(
                (1 == childType)
            ) {
                actual[actual.length] = childName;

            }

            else {
                test.equal(childType, 3, 'textNodeType');

            }

        }
        test.equal(actual.join(), expected.join(), 'element childElements');

        test.done();
    },

    /**
     *
     The "getChildNodes()" method returns a NodeList
     that contains all children of this node.   If there
     are not any children, this is a NodeList that does not
     contain any nodes.

     Retrieve the character data of the second "em" node and
     invoke the "getChildNodes()" method.   The
     NodeList returned should not have any nodes.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodechildnodesempty: function(test) {
        var success;
        var doc;
        var elementList;
        var childList;
        var employeeNode;
        var textNode;
        var length;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("em");
        employeeNode = elementList.item(1);
        textNode = employeeNode.firstChild;

        childList = textNode.childNodes;

        length = childList.length;

        test.equal(length, 0, 'length_zero');

        test.done();
    },

    /**
     *
     Retrieve the second acronym element and invoke
     the cloneNode method.   The
     duplicate node returned by the method should copy the
     attributes associated with this node.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
     */
    hc_nodecloneattributescopied: function(test) {
        var doc = buildHCStaffDocument();
        var attributes = doc.getElementsByTagName("acronym").item(1).cloneNode(false).attributes;
        var actual = [];
        for(var i=0;i<attributes.length;i++) {
            actual.push(attributes[i].name);
        }
        test.equal(actual.join(), ['title', 'class'].join(), 'nodeNames');
        test.done();
    },

    /**
     *
     The "cloneNode(deep)" method does not copy text unless it
     is deep cloned.(Test for deep=false)

     Retrieve the fourth child of the second employee and
     the "cloneNode(deep)" method with deep=false.   The
     duplicate node returned by the method should not copy
     any text data contained in this node.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
     */
    hc_nodeclonefalsenocopytext: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var childNode;
        var clonedNode;
        var lastChildNode;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        childNode = childList.item(3);
        clonedNode = childNode.cloneNode(false);
        lastChildNode = clonedNode.lastChild;

        test.equal(lastChildNode, null, 'nodeCloneFalseNoCopyTextAssert1');

        test.done();
    },

    /**
     *
     The duplicate node returned by the "cloneNode(deep)"
     method does not have a ParentNode.

     Retrieve the second employee and invoke the
     "cloneNode(deep)" method with deep=false.   The
     duplicate node returned should return null when the
     "getParentNode()" is invoked.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
     */
    hc_nodeclonegetparentnull: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var clonedNode;
        var parentNode;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        clonedNode = employeeNode.cloneNode(false);
        parentNode = clonedNode.parentNode;

        test.equal(parentNode, null, 'nodeCloneGetParentNullAssert1');

        test.done();
    },

    /**
     *
     The "cloneNode(deep)" method returns a copy of the node
     only if deep=false.

     Retrieve the second employee and invoke the
     "cloneNode(deep)" method with deep=false.   The
     method should only clone this node.   The NodeName and
     length of the NodeList are checked.   The "getNodeName()"
     method should return "employee" and the "getLength()"
     method should return 0.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
     */
    hc_nodeclonenodefalse: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var clonedNode;
        var cloneName;
        var cloneChildren;
        var length;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        clonedNode = employeeNode.cloneNode(false);
        cloneName = clonedNode.nodeName;

        test.equal(cloneName, "p", 'element strong');
        cloneChildren = clonedNode.childNodes;

        length = cloneChildren.length;

        test.equal(length, 0, 'length');

        test.done();
    },

    /**
     *
     The "cloneNode(deep)" method returns a copy of the node
     and the subtree under it if deep=true.

     Retrieve the second employee and invoke the
     "cloneNode(deep)" method with deep=true.   The
     method should clone this node and the subtree under it.
     The NodeName of each child in the returned node is
     checked to insure the entire subtree under the second
     employee was cloned.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodeclonenodetrue: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var clonedNode;
        var clonedList;
        var clonedChild;
        var clonedChildName;
        var origList;
        var origChild;
        var origChildName;
        var result = new Array();

        var expected = new Array();


        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        origList = employeeNode.childNodes;

        for(var indexN10065 = 0;indexN10065 < origList.length; indexN10065++) {
            origChild = origList.item(indexN10065);
            origChildName = origChild.nodeName;

            expected[expected.length] = origChildName;

        }
        clonedNode = employeeNode.cloneNode(true);
        clonedList = clonedNode.childNodes;

        for(var indexN1007B = 0;indexN1007B < clonedList.length; indexN1007B++) {
            clonedChild = clonedList.item(indexN1007B);
            clonedChildName = clonedChild.nodeName;

            result[result.length] = clonedChildName;

        }
        test.equal(result.join(), expected.join(), 'clone');

        test.done();
    },

    /**
     *
     The "cloneNode(deep)" method does not copy text unless it
     is deep cloned.(Test for deep=true)

     Retrieve the eighth child of the second employee and
     the "cloneNode(deep)" method with deep=true.   The
     duplicate node returned by the method should copy
     any text data contained in this node.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodeclonetruecopytext: function(test) {
        var success;
        var doc;
        var elementList;
        var childNode;
        var clonedNode;
        var lastChildNode;
        var childValue;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("sup");
        childNode = elementList.item(1);
        clonedNode = childNode.cloneNode(true);
        lastChildNode = clonedNode.lastChild;

        childValue = lastChildNode.nodeValue;

        test.equal(childValue, "35,000", 'cloneContainsText');

        test.done();
    },

    /**
     *
     The "getAttributes()" method invoked on a Comment
     Node returns null.

     Find any comment that is an immediate child of the root
     and assert that Node.attributes is null.  Then create
     a new comment node (in case they had been omitted) and
     make the assertion.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=263
     */
    hc_nodecommentnodeattributes: function(test) {
        var success;
        var doc;
        var commentNode;
        var nodeList;
        var attrList;
        var nodeType;

        doc = buildHCStaffDocument();
        nodeList = doc.childNodes;

        for(var indexN10043 = 0;indexN10043 < nodeList.length; indexN10043++) {
            commentNode = nodeList.item(indexN10043);
            nodeType = commentNode.nodeType;


            if(
                (8 == nodeType)
            ) {
                attrList = commentNode.attributes;

                test.equal(attrList, null, 'existingCommentAttributesNull');

            }

        }
        commentNode = doc.createComment("This is a comment");
        attrList = commentNode.attributes;

        test.equal(attrList, null, 'createdCommentAttributesNull');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeName()" method for a
     Comment Node is "#comment".

     Retrieve the Comment node in the XML file
     and check the string returned by the "getNodeName()"
     method.   It should be equal to "#comment".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
     */
    hc_nodecommentnodename: function(test) {
        var success;
        var doc;
        var elementList;
        var commentNode;
        var nodeType;
        var commentName;
        var commentNodeName;

        doc = buildHCStaffDocument();
        elementList = doc.childNodes;

        for(var indexN10044 = 0;indexN10044 < elementList.length; indexN10044++) {
            commentNode = elementList.item(indexN10044);
            nodeType = commentNode.nodeType;


            if(
                (8 == nodeType)
            ) {
                commentNodeName = commentNode.nodeName;

                test.equal(commentNodeName, "#comment", 'existingNodeName');

            }

        }
        commentNode = doc.createComment("This is a comment");
        commentNodeName = commentNode.nodeName;

        test.equal(commentNodeName, "#comment", 'createdNodeName');

        test.done();
    },

    /**
     *
     The "getNodeType()" method for a Comment Node
     returns the constant value 8.

     Retrieve the nodes from the document and check for
     a comment node and invoke the "getNodeType()" method.   This should
     return 8.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
     */
    hc_nodecommentnodetype: function(test) {
        var success;
        var doc;
        var testList;
        var commentNode;
        var commentNodeName;
        var nodeType;

        doc = buildHCStaffDocument();
        testList = doc.childNodes;

        for(var indexN10040 = 0;indexN10040 < testList.length; indexN10040++) {
            commentNode = testList.item(indexN10040);
            commentNodeName = commentNode.nodeName;


            if(
                ("#comment" == commentNodeName)
            ) {
                nodeType = commentNode.nodeType;

                test.equal(nodeType, 8, 'existingCommentNodeType');

            }

        }
        commentNode = doc.createComment("This is a comment");
        nodeType = commentNode.nodeType;

        test.equal(nodeType, 8, 'createdCommentNodeType');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeValue()" method for a
     Comment Node is the content of the comment.

     Retrieve the comment in the XML file and
     check the string returned by the "getNodeValue()" method.
     It should be equal to "This is comment number 1".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
     */
    hc_nodecommentnodevalue: function(test) {
        var success;
        var doc;
        var elementList;
        var commentNode;
        var commentName;
        var commentValue;

        doc = buildHCStaffDocument();
        elementList = doc.childNodes;

        for(var indexN10040 = 0;indexN10040 < elementList.length; indexN10040++) {
            commentNode = elementList.item(indexN10040);
            commentName = commentNode.nodeName;


            if(
                ("#comment" == commentName)
            ) {
                commentValue = commentNode.nodeValue;

                test.equal(commentValue, " This is comment number 1.", 'value');

            }

        }
        commentNode = doc.createComment(" This is a comment");
        commentValue = commentNode.nodeValue;

        test.equal(commentValue, " This is a comment", 'createdCommentNodeValue');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeName()" method for a
     DocumentFragment Node is "#document-frament".

     Retrieve the DOM document and invoke the
     "createDocumentFragment()" method and check the string
     returned by the "getNodeName()" method.   It should be
     equal to "#document-fragment".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
     */
    hc_nodedocumentfragmentnodename: function(test) {
        var success;
        var doc;
        var docFragment;
        var documentFragmentName;

        doc = buildHCStaffDocument();
        docFragment = doc.createDocumentFragment();
        documentFragmentName = docFragment.nodeName;

        test.equal(documentFragmentName, "#document-fragment", 'nodeDocumentFragmentNodeNameAssert1');

        test.done();
    },

    /**
     *
     The "getNodeType()" method for a DocumentFragment Node
     returns the constant value 11.

     Invoke the "createDocumentFragment()" method and
     examine the NodeType of the document fragment
     returned by the "getNodeType()" method.   The method
     should return 11.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
     */
    hc_nodedocumentfragmentnodetype: function(test) {
        var success;
        var doc;
        var documentFragmentNode;
        var nodeType;

        doc = buildHCStaffDocument();
        documentFragmentNode = doc.createDocumentFragment();
        nodeType = documentFragmentNode.nodeType;

        test.equal(nodeType, 11, 'nodeDocumentFragmentNodeTypeAssert1');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeValue()" method for a
     DocumentFragment Node is null.

     Retrieve the DOM document and invoke the
     "createDocumentFragment()" method and check the string
     returned by the "getNodeValue()" method.   It should be
     equal to null.

     * @author Curt Arnold
     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     */
    hc_nodedocumentfragmentnodevalue: function(test) {
        var success;
        var doc;
        var docFragment;
        var attrList;
        var value;

        doc = buildHCStaffDocument();
        docFragment = doc.createDocumentFragment();
        attrList = docFragment.attributes;

        test.equal(attrList, null, 'attributesNull');
        value = docFragment.nodeValue;

        test.equal(value, null, 'initiallyNull');

        test.done();
    },

    /**
     *
     The "getAttributes()" method invoked on a Document
     Node returns null.

     Retrieve the DOM Document and invoke the
     "getAttributes()" method on the Document Node.
     It should return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
     */
    hc_nodedocumentnodeattribute: function(test) {
        var success;
        var doc;
        var attrList;

        doc = buildHCStaffDocument();
        attrList = doc.attributes;

        test.equal(attrList, null, 'doc_attributes_is_null');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeName()" method for a
     Document Node is "#document".

     Retrieve the DOM document and check the string returned
     by the "getNodeName()" method.   It should be equal to
     "#document".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     */
    hc_nodedocumentnodename: function(test) {
        var success;
        var doc;
        var documentName;

        doc = buildHCStaffDocument();
        documentName = doc.nodeName;

        test.equal(documentName, "#document", 'documentNodeName');

        test.done();
    },

    /**
     *
     The "getNodeType()" method for a Document Node
     returns the constant value 9.

     Retrieve the document and invoke the "getNodeType()"
     method.   The method should return 9.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     */
    hc_nodedocumentnodetype: function(test) {
        var success;
        var doc;
        var nodeType;

        doc = buildHCStaffDocument();
        nodeType = doc.nodeType;

        test.equal(nodeType, 9, 'nodeDocumentNodeTypeAssert1');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeValue()" method for a
     Document Node is null.

     Retrieve the DOM Document and check the string returned
     by the "getNodeValue()" method.   It should be equal to
     null.


     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     */
    hc_nodedocumentnodevalue: function(test) {
        var doc = buildHCStaffDocument();
        test.equal(doc.nodeValue, null, 'documentNodeValue');
        test.done();
    },

    /**
     *
     Retrieve the third "acronym" element and evaluate Node.attributes.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
     * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
     */
    hc_nodeelementnodeattributes: function(test) {
        var doc = buildHCStaffDocument();
        var attributes = doc.getElementsByTagName("acronym").item(2).attributes;
        var actual = [];
        for(var i=0;i<attributes.length;i++) {
            actual.push(attributes[i].name);
        }
        test.equal(actual.join(), ['title', 'class'].join(), 'attrNames');
        test.done();
    },

    /**
     *
     Retrieve the first Element Node(Root Node) of the
     DOM object and check the string returned by the
     "getNodeName()" method.   It should be equal to its
     tagName.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
     */
    hc_nodeelementnodename: function(test) {
        var success;
        var doc;
        var elementNode;
        var elementName;

        doc = buildHCStaffDocument();
        elementNode = doc.documentElement;

        elementName = elementNode.nodeName;


        test.equal(elementName, "html", 'element nodeName');

        test.done();
    },

    /**
     *
     The "getNodeType()" method for an Element Node
     returns the constant value 1.

     Retrieve the root node and invoke the "getNodeType()"
     method.   The method should return 1.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     */
    hc_nodeelementnodetype: function(test) {
        var success;
        var doc;
        var rootNode;
        var nodeType;

        doc = buildHCStaffDocument();
        rootNode = doc.documentElement;

        nodeType = rootNode.nodeType;

        test.equal(nodeType, 1, 'nodeElementNodeTypeAssert1');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeValue()" method for an
     Element Node is null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     */
    hc_nodeelementnodevalue: function(test) {
        var success;
        var doc;
        var elementNode;
        var elementValue;

        doc = buildHCStaffDocument();
        elementNode = doc.documentElement;

        elementValue = elementNode.nodeValue;

        test.equal(elementValue, null, 'elementNodeValue');

        test.done();
    },

    /**
     *
     The "getFirstChild()" method returns the first child
     of this node.

     Retrieve the second employee and invoke the
     "getFirstChild()" method.   The NodeName returned
     should be "#text" or "EM".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-169727388
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodegetfirstchild: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var fchildNode;
        var childName;
        var nodeType;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        fchildNode = employeeNode.firstChild;

        childName = fchildNode.nodeName;


        if(
            ("#text" == childName)
        ) {
            test.equal(childName, "#text", 'firstChild_w_whitespace');

        }

        else {
            test.equal(childName, "em", 'element firstChild_wo_whitespace');

        }

        test.done();
    },

    /**
     *
     If there is not a first child then the "getFirstChild()"
     method returns null.

     Retrieve the text of the first "em" element and invoke the "getFirstChild()" method.   It
     should return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-169727388
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodegetfirstchildnull: function(test) {
        var success;
        var doc;
        var emList;
        var emNode;
        var emText;
        var nullChild;

        doc = buildHCStaffDocument();
        emList = doc.getElementsByTagName("em");
        emNode = emList.item(0);
        emText = emNode.firstChild;

        nullChild = emText.firstChild;

        test.equal(nullChild, null, 'nullChild');

        test.done();
    },

    /**
     *
     The "getLastChild()" method returns the last child
     of this node.

     Retrieve the second employee and invoke the
     "getLastChild()" method.   The NodeName returned
     should be "#text".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-61AD09FB
     */
    hc_nodegetlastchild: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var lchildNode;
        var childName;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        lchildNode = employeeNode.lastChild;

        childName = lchildNode.nodeName;

        test.equal(childName, "#text", 'whitespace');

        test.done();
    },

    /**
     *

     If there is not a last child then the "getLastChild()"
     method returns null.

     Retrieve the text of the first "em" element and invoke the "getFirstChild()" method.   It
     should return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-61AD09FB
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodegetlastchildnull: function(test) {
        var success;
        var doc;
        var emList;
        var emNode;
        var emText;
        var nullChild;

        doc = buildHCStaffDocument();
        emList = doc.getElementsByTagName("em");
        emNode = emList.item(0);
        emText = emNode.firstChild;

        nullChild = emText.lastChild;

        test.equal(nullChild, null, 'nullChild');

        test.done();
    },

    /**
     *
     The "getNextSibling()" method returns the node immediately
     following this node.

     Retrieve the first child of the second employee and
     invoke the "getNextSibling()" method.   It should return
     a node with the NodeName of "#text".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6AC54C2F
     */
    hc_nodegetnextsibling: function(test) {
        var success;
        var doc;
        var elementList;
        var emNode;
        var nsNode;
        var nsName;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("em");
        emNode = elementList.item(1);
        nsNode = emNode.nextSibling;

        nsName = nsNode.nodeName;

        test.equal(nsName, "#text", 'whitespace');

        test.done();
    },

    /**
     *

     If there is not a node immediately following this node the

     "getNextSibling()" method returns null.



     Retrieve the first child of the second employee and

     invoke the "getNextSibling()" method.   It should

     be set to null.


     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6AC54C2F
     */
    hc_nodegetnextsiblingnull: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var lcNode;
        var nsNode;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        lcNode = employeeNode.lastChild;

        nsNode = lcNode.nextSibling;

        test.equal(nsNode, null, 'nodeGetNextSiblingNullAssert1');

        test.done();
    },

    /**
     *
     Evaluate Node.ownerDocument on the second "p" element.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#node-ownerDoc
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
     */
    hc_nodegetownerdocument: function(test) {
        var success;
        var doc;
        var elementList;
        var docNode;
        var ownerDocument;
        var docElement;
        var elementName;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        docNode = elementList.item(1);
        ownerDocument = docNode.ownerDocument;

        docElement = ownerDocument.documentElement;

        elementName = docElement.nodeName;


        test.equal(elementName, "html", 'element ownerDocElemTagName');

        test.done();
    },

    /**
     *

     The "getOwnerDocument()" method returns null if the target

     node itself is a document.



     Invoke the "getOwnerDocument()" method on the master

     document.   The Document returned should be null.


     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#node-ownerDoc
     */
    // djf: dom core has changed this so documents are their own
    // owners, so invert the sense of the test
    hc_nodegetownerdocumentnull: function(test) {
        var success;
        var doc;
        var ownerDocument;

        doc = buildHCStaffDocument();
        ownerDocument = doc.ownerDocument;

        test.equal(ownerDocument, doc, 'nodeGetOwnerDocumentNullAssert1');

        test.done();
    },

    /**
     *
     The "getPreviousSibling()" method returns the node
     immediately preceding this node.

     Retrieve the second child of the second employee and
     invoke the "getPreviousSibling()" method.   It should
     return a node with a NodeName of "#text".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-640FB3C8
     */
    hc_nodegetprevioussibling: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var psNode;
        var psName;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(1);
        psNode = nameNode.previousSibling;

        psName = psNode.nodeName;

        test.equal(psName, "#text", 'whitespace');

        test.done();
    },

    /**
     *

     If there is not a node immediately preceding this node the

     "getPreviousSibling()" method returns null.



     Retrieve the first child of the second employee and

     invoke the "getPreviousSibling()" method.   It should

     be set to null.


     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-640FB3C8
     */
    hc_nodegetprevioussiblingnull: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var fcNode;
        var psNode;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(2);
        fcNode = employeeNode.firstChild;

        psNode = fcNode.previousSibling;

        test.equal(psNode, null, 'nodeGetPreviousSiblingNullAssert1');

        test.done();
    },

    /**
     *
     The "hasChildNodes()" method returns true if the node
     has children.

     Retrieve the root node("staff") and invoke the
     "hasChildNodes()" method.   It should return the boolean
     value "true".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-810594187
     */
    hc_nodehaschildnodes: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var state;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        state = employeeNode.hasChildNodes();
        test.ok(state, 'nodeHasChildAssert1');

        test.done();
    },

    /**
     *
     The "hasChildNodes()" method returns false if the node
     does not have any children.

     Retrieve the text of the first "em" element and invoke the "hasChildNodes()" method.   It
     should return false.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-810594187
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodehaschildnodesfalse: function(test) {
        var success;
        var doc;
        var emList;
        var emNode;
        var emText;
        var hasChild;

        doc = buildHCStaffDocument();
        emList = doc.getElementsByTagName("em");
        emNode = emList.item(0);
        emText = emNode.firstChild;

        hasChild = emText.hasChildNodes();
        test.equal(hasChild, false, 'hasChild');

        test.done();
    },

    /**
     *
     The "insertBefore(newChild,refChild)" method inserts the
     node "newChild" before the node "refChild".

     Insert a newly created Element node before the second
     sup element in the document and check the "newChild"
     and "refChild" after insertion for correct placement.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=261
     */
    hc_nodeinsertbefore: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var refChild;
        var newChild;
        var child;
        var childName;
        var insertedNode;
        var actual = new Array();

        expected = new Array();
        expected[0] = "em";
        expected[1] = "strong";
        expected[2] = "code";
        expected[3] = "br";
        expected[4] = "sup";
        expected[5] = "var";
        expected[6] = "acronym";

        var nodeType;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("sup");
        refChild = elementList.item(2);
        employeeNode = refChild.parentNode;

        childList = employeeNode.childNodes;

        newChild = doc.createElement("br");
        insertedNode = employeeNode.insertBefore(newChild,refChild);
        for(var indexN10091 = 0;indexN10091 < childList.length; indexN10091++) {
            child = childList.item(indexN10091);
            nodeType = child.nodeType;


            if(
                (1 == nodeType)
            ) {
                childName = child.nodeName;

                actual[actual.length] = childName;

            }

        }
        test.equal(actual.join(), expected.join(), 'element nodeNames');

        test.done();
    },

    /**
     *
     If the "newChild" is a DocumentFragment object then all
     its children are inserted in the same order before the
     the "refChild".

     Create a DocumentFragment object and populate it with
     two Element nodes.   Retrieve the second employee and
     insert the newly created DocumentFragment before its
     fourth child.   The second employee should now have two
     extra children("newChild1" and "newChild2") at
     positions fourth and fifth respectively.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    hc_nodeinsertbeforedocfragment: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var refChild;
        var newdocFragment;
        var newChild1;
        var newChild2;
        var child;
        var childName;
        var appendedChild;
        var insertedNode;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        refChild = childList.item(3);
        newdocFragment = doc.createDocumentFragment();
        newChild1 = doc.createElement("br");
        newChild2 = doc.createElement("b");
        appendedChild = newdocFragment.appendChild(newChild1);
        appendedChild = newdocFragment.appendChild(newChild2);
        insertedNode = employeeNode.insertBefore(newdocFragment,refChild);
        child = childList.item(3);
        childName = child.nodeName;

        test.equal(childName, "br", 'element childName3');
        child = childList.item(4);
        childName = child.nodeName;

        test.equal(childName, "b", 'element childName4');

        test.done();
    },


    /**
     *
     The "insertBefore(newChild,refChild)" method raises a
     WRONG_DOCUMENT_ERR DOMException if the "newChild" was
     created from a different document than the one that
     created this node.

     Retrieve the second employee and attempt to insert a new
     child that was created from a different document than the
     one that created the second employee.   An attempt to
     insert such a child should raise the desired exception.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='WRONG_DOCUMENT_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-952280727')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='WRONG_DOCUMENT_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    // djf: dom core allows this now, so invert sense of this test
    hc_nodeinsertbeforenewchilddiffdocument: function(test) {
        var success;
        var doc1;
        var doc2;
        var refChild;
        var newChild;
        var elementList;
        var elementNode;
        var insertedNode;
        doc1 = buildHCStaffDocument();
        doc2 = buildHCStaffDocument();
        newChild = doc1.createElement("br");
        elementList = doc2.getElementsByTagName("p");
        elementNode = elementList.item(1);
        refChild = elementNode.firstChild;


        {
            success = true;
            try {
                insertedNode = elementNode.insertBefore(newChild,refChild);
            }
            catch(ex) {
                success = false
            }
            test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
        }

        test.done();
    },

    /**
     *
     If the "newChild" is already in the tree, the
     "insertBefore(newChild,refChild)" method must first
     remove it before the insertion takes place.

     Insert a node Element ("em") that is already
     present in the tree.   The existing node should be
     removed first and the new one inserted.   The node is
     inserted at a different position in the tree to assure
     that it was indeed inserted.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodeinsertbeforenewchildexists: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var refChild;
        var newChild;
        var child;
        var childName;
        var insertedNode;
        expected = new Array();
        expected[0] = "strong";
        expected[1] = "code";
        expected[2] = "sup";
        expected[3] = "var";
        expected[4] = "em";
        expected[5] = "acronym";

        var result = new Array();

        var nodeType;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.getElementsByTagName("*");
        refChild = childList.item(5);
        newChild = childList.item(0);

        insertedNode = employeeNode.insertBefore(newChild,refChild);
        for(var indexN1008C = 0;indexN1008C < childList.length; indexN1008C++) {
            child = childList.item(indexN1008C);
            nodeType = child.nodeType;


            if(
                (1 == nodeType)
            ) {
                childName = child.nodeName;

                result[result.length] = childName;

            }

        }
        test.equal(result.join(), expected.join(), 'element childNames');

        test.done();
    },

    /**
     *
     The "insertBefore(newChild,refChild)" method raises a
     HIERARCHY_REQUEST_ERR DOMException if the node to be
     inserted is one of this nodes ancestors.

     Retrieve the second employee and attempt to insert a
     node that is one of its ancestors(root node).   An
     attempt to insert such a node should raise the
     desired exception.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-952280727')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='HIERARCHY_REQUEST_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     */
    hc_nodeinsertbeforenodeancestor: function(test) {
        var success;
        var doc;
        var newChild;
        var elementList;
        var employeeNode;
        var childList;
        var refChild;
        var insertedNode;

        doc = buildHCStaffDocument();
        newChild = doc.documentElement;

        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        refChild = childList.item(0);

        {
            success = false;
            try {
                insertedNode = employeeNode.insertBefore(newChild,refChild);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 3);
            }
            test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
        }

        test.done();
    },

    /**
     *
     The "insertBefore(newChild,refchild)" method returns
     the node being inserted.

     Insert an Element node before the fourth
     child of the second employee and check the node
     returned from the "insertBefore(newChild,refChild)"
     method.   The node returned should be "newChild".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    hc_nodeinsertbeforenodename: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var refChild;
        var newChild;
        var insertedNode;
        var childName;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        refChild = childList.item(3);
        newChild = doc.createElement("br");
        insertedNode = employeeNode.insertBefore(newChild,refChild);
        childName = insertedNode.nodeName;

        test.equal(childName, "br", 'element nodeName');

        test.done();
    },

    /**
     *
     The "insertBefore(newChild,refChild)" method raises a
     NOT_FOUND_ERR DOMException if the reference child is
     not a child of this node.

     Retrieve the second employee and attempt to insert a
     new node before a reference node that is not a child
     of this node.   An attempt to insert before a non child
     node should raise the desired exception.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-952280727')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    hc_nodeinsertbeforerefchildnonexistent: function(test) {
        var success;
        var doc;
        var refChild;
        var newChild;
        var elementList;
        var elementNode;
        var insertedNode;

        doc = buildHCStaffDocument();
        newChild = doc.createElement("br");
        refChild = doc.createElement("b");
        elementList = doc.getElementsByTagName("p");
        elementNode = elementList.item(1);

        {
            success = false;
            try {
                insertedNode = elementNode.insertBefore(newChild,refChild);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 8);
            }
            test.ok(success, 'throw_NOT_FOUND_ERR');
        }

        test.done();
    },

    /**
     *
     If the "refChild" is null then the
     "insertBefore(newChild,refChild)" method inserts the
     node "newChild" at the end of the list of children.

     Retrieve the second employee and invoke the
     "insertBefore(newChild,refChild)" method with
     refChild=null.   Since "refChild" is null the "newChild"
     should be added to the end of the list.   The last item
     in the list is checked after insertion.   The last Element
     node of the list should be "newChild".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    hc_nodeinsertbeforerefchildnull: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var refChild = null;

        var newChild;
        var child;
        var childName;
        var insertedNode;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        newChild = doc.createElement("br");
        insertedNode = employeeNode.insertBefore(newChild,refChild);
        child = employeeNode.lastChild;

        childName = child.nodeName;

        test.equal(childName, "br", 'element nodeName');

        test.done();
    },

    /**
     *
     Create a list of all the children elements of the third
     employee and access its first child by using an index
     of 0.  This should result in the whitspace before "em" being
     selected (em when ignoring whitespace).
     Further we evaluate its content(by using
     the "getNodeName()" method) to ensure the proper
     element was accessed.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodelistindexequalzero: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var child;
        var childName;
        var length;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(2);
        employeeList = employeeNode.childNodes;

        length = employeeList.length;

        child = employeeList.item(0);
        childName = child.nodeName;


        if(
            (13 == length)
        ) {
            test.equal(childName, "#text", 'childName_w_whitespace');

        }

        else {
            test.equal(childName, "em", 'element childName_wo_whitespace');

        }

        test.done();
    },

    /**
     *
     The "getLength()" method returns the number of nodes
     in the list.

     Create a list of all the children elements of the third
     employee and invoke the "getLength()" method.
     It should contain the value 13.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-203510337
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodelistindexgetlength: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var length;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(2);
        employeeList = employeeNode.childNodes;

        length = employeeList.length;


        if(
            (6 == length)
        ) {
            test.equal(length, 6, 'length_wo_space');

        }

        else {
            test.equal(length, 13, 'length_w_space');

        }

        test.done();
    },

    /**
     *
     The "getLength()" method returns the number of nodes
     in the list.(Test for EMPTY list)

     Create a list of all the children of the Text node
     inside the first child of the third employee and
     invoke the "getLength()" method.   It should contain
     the value 0.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-203510337
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodelistindexgetlengthofemptylist: function(test) {
        var success;
        var doc;
        var emList;
        var emNode;
        var textNode;
        var textList;
        var length;

        doc = buildHCStaffDocument();
        emList = doc.getElementsByTagName("em");
        emNode = emList.item(2);
        textNode = emNode.firstChild;

        textList = textNode.childNodes;

        length = textList.length;

        test.equal(length, 0, 'length');

        test.done();
    },

    /**
     *
     The items in the list are accessible via an integral
     index starting from zero.
     (Index not equal 0)

     Create a list of all the children elements of the third
     employee and access its fourth child by using an index
     of 3 and calling getNodeName() which should return
     "strong" (no whitespace)  or "#text" (with whitespace).

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodelistindexnotzero: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var child;
        var childName;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(2);
        employeeList = employeeNode.childNodes;

        child = employeeList.item(3);
        childName = child.nodeName;


        if(
            ("#text" == childName)
        ) {
            test.equal(childName, "#text", 'childName_space');

        }

        else {
            test.equal(childName, "strong", 'element childName_strong');

        }

        test.done();
    },

    /**
     *
     Create a list of all the children elements of the third
     employee and access its first child by invoking the
     "item(index)" method with an index=0.  This should
     result in node with a nodeName of "#text" or "em".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodelistreturnfirstitem: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var child;
        var childName;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(2);
        employeeList = employeeNode.childNodes;

        child = employeeList.item(0);
        childName = child.nodeName;


        if(
            ("#text" == childName)
        ) {
            test.equal(childName, "#text", 'nodeName_w_space');

        }

        else {
            test.equal(childName, "em", 'element nodeName_wo_space');

        }

        test.done();
    },

    /**
     *
     Create a list of all the children elements of the third
     employee and access its last child by invoking the
     "item(index)" method with an index=length-1.  This should
     result in node with nodeName="#text" or acronym.
     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodelistreturnlastitem: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var child;
        var childName;
        var index;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(2);
        employeeList = employeeNode.childNodes;

        index = employeeList.length;

        index -= 1;
        child = employeeList.item(index);
        childName = child.nodeName;


        if(
            (12 == index)
        ) {
            test.equal(childName, "#text", 'lastNodeName_w_whitespace');

        }

        else {
            test.equal(childName, "acronym", 'element lastNodeName');
            test.equal(index, 5, 'index');

        }

        test.done();
    },

    /**
     *
     The range of valid child node indices is 0 thru length -1

     Create a list of all the children elements of the third
     employee and traverse the list from index=0 thru
     length -1.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-203510337
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodelisttraverselist: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var child;
        var childName;
        var nodeType;
        var result = new Array();

        expected = new Array();
        expected[0] = "em";
        expected[1] = "strong";
        expected[2] = "code";
        expected[3] = "sup";
        expected[4] = "var";
        expected[5] = "acronym";


        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(2);
        employeeList = employeeNode.childNodes;

        for(var indexN10073 = 0;indexN10073 < employeeList.length; indexN10073++) {
            child = employeeList.item(indexN10073);
            nodeType = child.nodeType;

            childName = child.nodeName;


            if(
                (1 == nodeType)
            ) {
                result[result.length] = childName;

            }

            else {
                test.equal(nodeType, 3, 'textNodeType');
                test.equal(childName, "#text", 'textNodeName');

            }

        }
        test.equal(result.join(), expected.join(), 'element nodeNames');

        test.done();
    },

    /**
     *
     The "getParentNode()" method returns the parent
     of this node.

     Retrieve the second employee and invoke the
     "getParentNode()" method on this node.   It should
     be set to "body".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1060184317
     */
    hc_nodeparentnode: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var parentNode;
        var parentName;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        parentNode = employeeNode.parentNode;

        parentName = parentNode.nodeName;

        test.equal(parentName, "body", 'element parentNodeName');

        test.done();
    },

    /**
     *
     The "getParentNode()" method invoked on a node that has
     just been created and not yet added to the tree is null.

     Create a new "employee" Element node using the
     "createElement(name)" method from the Document interface.
     Since this new node has not yet been added to the tree,
     the "getParentNode()" method will return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1060184317
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    hc_nodeparentnodenull: function(test) {
        var success;
        var doc;
        var createdNode;
        var parentNode;

        doc = buildHCStaffDocument();
        createdNode = doc.createElement("br");
        parentNode = createdNode.parentNode;

        test.equal(parentNode, null, 'parentNode');

        test.done();
    },

    /**
     *
     The "removeChild(oldChild)" method removes the child node
     indicated by "oldChild" from the list of children and
     returns it.

     Remove the first employee by invoking the
     "removeChild(oldChild)" method an checking the
     node returned by the "getParentNode()" method.   It
     should be set to null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    hc_noderemovechild: function(test) {
        var success;
        var doc;
        var rootNode;
        var childList;
        var childToRemove;
        var removedChild;
        var parentNode;

        doc = buildHCStaffDocument();
        rootNode = doc.documentElement;

        childList = rootNode.childNodes;

        childToRemove = childList.item(1);
        removedChild = rootNode.removeChild(childToRemove);
        parentNode = removedChild.parentNode;

        test.equal(parentNode, null, 'parentNodeNull');

        test.done();
    },

    /**
     *
     The "removeChild(oldChild)" method returns
     the node being removed.

     Remove the first child of the second employee
     and check the NodeName returned by the
     "removeChild(oldChild)" method.   The returned node
     should have a NodeName equal to "#text".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_noderemovechildgetnodename: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var oldChild;
        var removedChild;
        var childName;
        var oldName;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        oldChild = childList.item(0);
        oldName = oldChild.nodeName;

        removedChild = employeeNode.removeChild(oldChild);
        test.notEqual(removedChild, null, 'notnull');
        childName = removedChild.nodeName;

        test.equal(childName, oldName, 'nodeName');

        test.done();
    },

    /**
     *
     The "removeChild(oldChild)" method removes the node
     indicated by "oldChild".

     Retrieve the second p element and remove its first child.
     After the removal, the second p element should have 5 element
     children and the first child should now be the child
     that used to be at the second position in the list.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_noderemovechildnode: function(test) {
        var success;
        var doc;
        var elementList;
        var emList;
        var employeeNode;
        var childList;
        var oldChild;
        var child;
        var childName;
        var length;
        var removedChild;
        var removedName;
        var nodeType;
        expected = new Array();
        expected[0] = "strong";
        expected[1] = "code";
        expected[2] = "sup";
        expected[3] = "var";
        expected[4] = "acronym";

        var actual = new Array();


        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        emList = employeeNode.getElementsByTagName("em");
        oldChild = emList.item(0);
        removedChild = employeeNode.removeChild(oldChild);
        removedName = removedChild.nodeName;

        test.equal(removedName, "em", 'element removedName');
        for(var indexN10098 = 0;indexN10098 < childList.length; indexN10098++) {
            child = childList.item(indexN10098);
            nodeType = child.nodeType;

            childName = child.nodeName;


            if(
                (1 == nodeType)
            ) {
                actual[actual.length] = childName;

            }

            else {
                test.equal(nodeType, 3, 'textNodeType');
                test.equal(childName, "#text", 'textNodeName');

            }

        }
        test.equal(actual.join(), expected.join(), 'element childNames');

        test.done();
    },

    /**
     *
     The "removeChild(oldChild)" method raises a
     NOT_FOUND_ERR DOMException if the old child is
     not a child of this node.

     Retrieve the second employee and attempt to remove a
     node that is not one of its children.   An attempt to
     remove such a node should raise the desired exception.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-1734834066')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    hc_noderemovechildoldchildnonexistent: function(test) {
        var success;
        var doc;
        var oldChild;
        var elementList;
        var elementNode;
        var removedChild;

        doc = buildHCStaffDocument();
        oldChild = doc.createElement("br");
        elementList = doc.getElementsByTagName("p");
        elementNode = elementList.item(1);

        {
            success = false;
            try {
                removedChild = elementNode.removeChild(oldChild);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 8);
            }
            test.ok(success, 'throw_NOT_FOUND_ERR');
        }

        test.done();
    },

    /**
     *
     The "replaceChild(newChild,oldChild)" method replaces
     the node "oldChild" with the node "newChild".

     Replace the first element of the second employee with
     a newly created Element node.   Check the first position
     after the replacement operation is completed.   The new
     Element should be "newChild".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    hc_nodereplacechild: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var oldChild;
        var newChild;
        var child;
        var childName;
        var replacedNode;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        oldChild = childList.item(0);
        newChild = doc.createElement("br");
        replacedNode = employeeNode.replaceChild(newChild,oldChild);
        child = childList.item(0);
        childName = child.nodeName;

        test.equal(childName, "br", 'element nodeName');

        test.done();
    },


    /**
     *
     The "replaceChild(newChild,oldChild)" method raises a
     WRONG_DOCUMENT_ERR DOMException if the "newChild" was
     created from a different document than the one that
     created this node.

     Retrieve the second employee and attempt to replace one
     of its children with a node created from a different
     document.   An attempt to make such a replacement
     should raise the desired exception.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-785887307')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    // djf: dom core allows this now, so invert sense of this test
    hc_nodereplacechildnewchilddiffdocument: function(test) {
        var success;
        var doc1;
        var doc2;
        var oldChild;
        var newChild;
        var elementList;
        var elementNode;
        var replacedChild;
        doc1 = buildHCStaffDocument();
        doc2 = buildHCStaffDocument();
        newChild = doc1.createElement("br");
        elementList = doc2.getElementsByTagName("p");
        elementNode = elementList.item(1);
        oldChild = elementNode.firstChild;


        {
            success = true;
            try {
                replacedChild = elementNode.replaceChild(newChild,oldChild);
            }
            catch(ex) {
                success = false;
            }
            test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
        }

        test.done();
    },

    /**
     *
     If the "newChild" is already in the tree, it is first
     removed before the new one is added.

     Retrieve the second "p" and replace "acronym" with its "em".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
     */
    hc_nodereplacechildnewchildexists: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var oldChild = null;

        var newChild = null;

        var child;
        var childName;
        var childNode;
        var actual = new Array();

        expected = new Array();
        expected[0] = "strong";
        expected[1] = "code";
        expected[2] = "sup";
        expected[3] = "var";
        expected[4] = "em";

        var replacedChild;
        var nodeType;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.getElementsByTagName("*");
        newChild = childList.item(0);
        oldChild = childList.item(5);
        replacedChild = employeeNode.replaceChild(newChild,oldChild);
        test.equal(replacedChild, oldChild, 'return_value_same')
        for(var indexN10094 = 0;indexN10094 < childList.length; indexN10094++) {
            childNode = childList.item(indexN10094);
            childName = childNode.nodeName;

            nodeType = childNode.nodeType;


            if(
                (1 == nodeType)
            ) {
                actual[actual.length] = childName;

            }

            else {
                test.equal(nodeType, 3, 'textNodeType');
                test.equal(childName, "#text", 'textNodeName');

            }

        }
        test.equal(actual.join(), expected.join(), 'element childNames');

        test.done();
    },

    /**
     *
     The "replaceChild(newChild,oldChild)" method raises a
     HIERARCHY_REQUEST_ERR DOMException if the node to put
     in is one of this node's ancestors.

     Retrieve the second employee and attempt to replace
     one of its children with an ancestor node(root node).
     An attempt to make such a replacement should raise the
     desired exception.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-785887307')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='HIERARCHY_REQUEST_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     */
    hc_nodereplacechildnodeancestor: function(test) {
        var success;
        var doc;
        var newChild;
        var elementList;
        var employeeNode;
        var childList;
        var oldChild;
        var replacedNode;

        doc = buildHCStaffDocument();
        newChild = doc.documentElement;

        elementList = doc.getElementsByTagName("p");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        oldChild = childList.item(0);

        {
            success = false;
            try {
                replacedNode = employeeNode.replaceChild(newChild,oldChild);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 3);
            }
            test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
        }

        test.done();
    },

    /**
     *
     The "replaceChild(newChild,oldChild)" method returns
     the node being replaced.

     Replace the second Element of the second employee with
     a newly created node Element and check the NodeName
     returned by the "replaceChild(newChild,oldChild)"
     method.   The returned node should have a NodeName equal
     to "em".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    hc_nodereplacechildnodename: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var oldChild;
        var newChild;
        var replacedNode;
        var childName;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("p");

        employeeNode = elementList.item(1);
        childList = employeeNode.getElementsByTagName("em");
        oldChild = childList.item(0);
        newChild = doc.createElement("br");
        replacedNode = employeeNode.replaceChild(newChild,oldChild);
        childName = replacedNode.nodeName;

        test.equal(childName, "em", 'element replacedNodeName');

        test.done();
    },

    /**
     *
     The "replaceChild(newChild,oldChild)" method raises a
     NOT_FOUND_ERR DOMException if the old child is
     not a child of this node.

     Retrieve the second employee and attempt to replace a
     node that is not one of its children.   An attempt to
     replace such a node should raise the desired exception.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-785887307')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
     */
    hc_nodereplacechildoldchildnonexistent: function(test) {
        var success;
        var doc;
        var oldChild;
        var newChild;
        var elementList;
        var elementNode;
        var replacedNode;

        doc = buildHCStaffDocument();
        newChild = doc.createElement("br");
        oldChild = doc.createElement("b");
        elementList = doc.getElementsByTagName("p");
        elementNode = elementList.item(1);

        {
            success = false;
            try {
                replacedNode = elementNode.replaceChild(newChild,oldChild);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 8);
            }
            test.ok(success, 'throw_NOT_FOUND_ERR');
        }

        test.done();
    },

    /**
     *
     The "getAttributes()" method invoked on a Text
     Node returns null.

     Retrieve the Text node from the last child of the
     first employee and invoke the "getAttributes()" method
     on the Text Node.  It should return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1312295772
     */
    hc_nodetextnodeattribute: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddr;
        var textNode;
        var attrList;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        testAddr = elementList.item(0);
        textNode = testAddr.firstChild;

        attrList = textNode.attributes;

        test.equal(attrList, null, 'text_attributes_is_null');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeName()" method for a
     Text Node is "#text".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     */
    hc_nodetextnodename: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddr;
        var textNode;
        var textName;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        testAddr = elementList.item(0);
        textNode = testAddr.firstChild;

        textName = textNode.nodeName;

        test.equal(textName, "#text", 'textNodeName');

        test.done();
    },

    /**
     *

     The "getNodeType()" method for a Text Node

     returns the constant value 3.



     Retrieve the Text node from the last child of

     the first employee and invoke the "getNodeType()"

     method.   The method should return 3.


     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     */
    hc_nodetextnodetype: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddr;
        var textNode;
        var nodeType;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        testAddr = elementList.item(0);
        textNode = testAddr.firstChild;

        nodeType = textNode.nodeType;

        test.equal(nodeType, 3, 'nodeTextNodeTypeAssert1');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeValue()" method for a
     Text Node is the content of the Text node.

     Retrieve the Text node from the last child of the first
     employee and check the string returned by the
     "getNodeValue()" method.   It should be equal to
     "1230 North Ave. Dallas, Texas 98551".

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     */
    hc_nodetextnodevalue: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddr;
        var textNode;
        var textValue;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        testAddr = elementList.item(0);
        textNode = testAddr.firstChild;

        textValue = textNode.nodeValue;

        test.equal(textValue, "1230 North Ave. Dallas, Texas 98551", 'textNodeValue');

        test.done();
    },

    /**
     *
     An element is created, setNodeValue is called with a non-null argument, but getNodeValue
     should still return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
     */
    hc_nodevalue01: function(test) {
        var success;
        var doc;
        var newNode;
        var newValue;

        doc = buildHCStaffDocument();
        newNode = doc.createElement("acronym");
        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'initiallyNull');
        newNode.nodeValue = "This should have no effect";

        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'nullAfterAttemptedChange');

        test.done();
    },

    /**
     *
     An comment is created, setNodeValue is called with a non-null argument, but getNodeValue
     should still return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
     */
    hc_nodevalue02: function(test) {
        var success;
        var doc;
        var newNode;
        var newValue;

        doc = buildHCStaffDocument();
        newNode = doc.createComment("This is a new Comment node");
        newValue = newNode.nodeValue;

        test.equal(newValue, "This is a new Comment node", 'initial');
        newNode.nodeValue = "This should have an effect";

        newValue = newNode.nodeValue;

        test.equal(newValue, "This should have an effect", 'afterChange');

        test.done();
    },


    /**
     *
     An document type accessed, setNodeValue is called with a non-null argument, but getNodeValue
     should still return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A31
     */
    hc_nodevalue04: function(test) {
        var success;
        var doc;
        var newNode;
        var newValue;

        doc = buildHCStaffDocument();
        newNode = doc.doctype;

        test.notEqual(newNode, null, 'docTypeNotNull');
        newValue = newNode.nodeValue;
        test.equal(newValue, null, 'initiallyNull');
        newNode.nodeValue = "This should have no effect";
        newValue = newNode.nodeValue;
        test.equal(newValue, null, 'nullAfterAttemptedChange');
        test.done();
    },

    /**
     *
     A document fragment is created, setNodeValue is called with a non-null argument, but getNodeValue
     should still return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
     */
    hc_nodevalue05: function(test) {
        var success;
        var doc;
        var newNode;
        var newValue;

        doc = buildHCStaffDocument();
        newNode = doc.createDocumentFragment();
        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'initiallyNull');
        newNode.nodeValue = "This should have no effect";

        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'nullAfterAttemptedChange');

        test.done();
    },

    /**
     *
     An document is accessed, setNodeValue is called with a non-null argument, but getNodeValue
     should still return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
     */
    hc_nodevalue06: function(test) {
        var success;
        var newNode;
        var newValue;
        newNode = buildHCStaffDocument();
        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'initiallyNull');
        newNode.nodeValue = "This should have no effect";

        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'nullAfterAttemptedChange');

        test.done();
    },



    /**
     *
     The "splitText(offset)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset is
     negative.

     Retrieve the textual data from the second child of the
     third employee and invoke the "splitText(offset)" method.
     The desired exception should be raised since the offset
     is a negative number.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-38853C1D')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     */
    hc_textindexsizeerrnegativeoffset: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var textNode;
        var splitNode;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(2);
        textNode = nameNode.firstChild;


        {
            success = false;
            try {
                splitNode = textNode.splitText(-69);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "splitText(offset)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset is
     greater than the number of characters in the Text node.

     Retrieve the textual data from the second child of the
     third employee and invoke the "splitText(offset)" method.
     The desired exception should be raised since the offset
     is a greater than the number of characters in the Text
     node.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-38853C1D')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    hc_textindexsizeerroffsetoutofbounds: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var textNode;
        var splitNode;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(2);
        textNode = nameNode.firstChild;


        {
            success = false;
            try {
                splitNode = textNode.splitText(300);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throw_INDEX_SIZE_ERR');
        }

        test.done();
    },


    /**
     *
     The "splitText(offset)" method returns the new Text node.

     Retrieve the textual data from the last child of the
     first employee and invoke the "splitText(offset)" method.
     The method should return the new Text node.   The offset
     value used for this test is 30.   The "getNodeValue()"
     method is called to check that the new node now contains
     the characters at and after position 30.
     (Starting count at 0)

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
     */
    hc_textsplittextfour: function(test) {
        var success;
        var doc;
        var elementList;
        var addressNode;
        var textNode;
        var splitNode;
        var value;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("acronym");
        addressNode = elementList.item(0);
        textNode = addressNode.firstChild;

        splitNode = textNode.splitText(30);
        value = splitNode.nodeValue;

        test.equal(value, "98551", 'textSplitTextFourAssert');

        test.done();
    },

    /**
     *
     The "splitText(offset)" method breaks the Text node into
     two Text nodes at the specified offset keeping each node
     as siblings in the tree.

     Retrieve the textual data from the second child of the
     third employee and invoke the "splitText(offset)" method.
     The method splits the Text node into two new sibling
     Text nodes keeping both of them in the tree.   This test
     checks the "nextSibling()" method of the original node
     to ensure that the two nodes are indeed siblings.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
     */
    hc_textsplittextone: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var textNode;
        var splitNode;
        var secondPart;
        var value;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(2);
        textNode = nameNode.firstChild;

        splitNode = textNode.splitText(7);
        secondPart = textNode.nextSibling;

        value = secondPart.nodeValue;

        test.equal(value, "Jones", 'textSplitTextOneAssert');

        test.done();
    },

    /**
     *
     After the "splitText(offset)" method breaks the Text node
     into two Text nodes, the new Text node contains all the
     content at and after the offset point.

     Retrieve the textual data from the second child of the
     third employee and invoke the "splitText(offset)" method.
     The new Text node should contain all the content
     at and after the offset point.   The "getNodeValue()"
     method is called to check that the new node now contains
     the characters at and after position seven.
     (Starting count at 0)

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
     */
    hc_textsplittextthree: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var textNode;
        var splitNode;
        var value;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(2);
        textNode = nameNode.firstChild;

        splitNode = textNode.splitText(6);
        value = splitNode.nodeValue;

        test.equal(value, " Jones", 'textSplitTextThreeAssert');

        test.done();
    },

    /**
     *
     After the "splitText(offset)" method breaks the Text node
     into two Text nodes, the original node contains all the
     content up to the offset point.

     Retrieve the textual data from the second child of the
     third employee and invoke the "splitText(offset)" method.
     The original Text node should contain all the content
     up to the offset point.   The "getNodeValue()" method
     is called to check that the original node now contains
     the first five characters.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
     */
    hc_textsplittexttwo: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var textNode;
        var splitNode;
        var value;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(2);
        textNode = nameNode.firstChild;

        splitNode = textNode.splitText(5);
        value = textNode.nodeValue;

        test.equal(value, "Roger", 'textSplitTextTwoAssert');

        test.done();
    },

    /**
     *
     If there is not any markup inside an Element or Attr node
     content, then the text is contained in a single object
     implementing the Text interface that is the only child
     of the element.

     Retrieve the textual data from the second child of the
     third employee.   That Text node contains a block of
     multiple text lines without markup, so they should be
     treated as a single Text node.   The "getNodeValue()"
     method should contain the combination of the two lines.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1312295772
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     */
    hc_textwithnomarkup: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var nodeV;
        var value;

        doc = buildHCStaffDocument();
        elementList = doc.getElementsByTagName("strong");
        nameNode = elementList.item(2);
        nodeV = nameNode.firstChild;

        value = nodeV.nodeValue;

        test.equal(value, "Roger\n Jones", 'textWithNoMarkupAssert');

        test.done();
    },

    /**
     *
     The range of valid child node indices is 0 to Length -1.

     Create a NamedNodeMap object from the attributes of the
     last child of the third employee and traverse the
     list from index 0 thru length -1.  All indices should
     be valid.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6D0FB19E
     */
    namednodemapchildnoderange: function(test) {
        var success;
        var doc;
        var elementList;
        var testEmployee;
        var attributes;
        var child;
        var length;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        testEmployee = elementList.item(2);
        attributes = testEmployee.attributes;

        length = attributes.length;

        test.equal(length, 2, 'length');
        child = attributes[0];
        child = attributes[1];

        test.done();
    },


    /**
     *
     The "getLength()" method returns the number of nodes
     in the map.

     Retrieve the second employee and create a NamedNodeMap
     listing of the attributes of the last child.  Once the
     list is created an invocation of the "getLength()"
     method is executed.  The number of nodes should be 2.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6D0FB19E
     */
    namednodemapnumberofnodes: function(test) {
        var success;
        var doc;
        var elementList;
        var testEmployee;
        var attributes;
        var length;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        testEmployee = elementList.item(2);
        attributes = testEmployee.attributes;

        length = attributes.length;

        test.equal(length, 2, 'length');

        test.done();
    },


    /**
     *
     The "item(index)" method returns the indexth item in
     the map(test for first item).

     Retrieve the second employee and create a NamedNodeMap
     listing of the attributes of the last child. Since the
     DOM does not specify an order of these nodes the contents
     of the FIRST node can contain either "domestic" or "street".
     The test should return "true" if the FIRST node is either
     of these values.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
     */
    namednodemapreturnfirstitem: function(test) {
        var doc = buildStaffDocument();
        var child = doc.getElementsByTagName("address").item(1).attributes[0];
        var name = child.nodeName;
        test.ok((("domestic" == name) || ("street" == name)), 'namednodemapReturnFirstItemAssert')
        test.done();
    },

    /**
     *
     The "item(index)" method returns the indexth item in
     the map(test for last item).

     Retrieve the second employee and create a NamedNodeMap
     listing of the attributes of the last child. Since the
     DOM does not specify an order of these nodes the contents
     of the LAST node can contain either "domestic" or "street".
     The test should return "true" if the LAST node is either
     of these values.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
     */
    namednodemapreturnlastitem: function(test) {
        var doc = buildStaffDocument();
        var child = doc.getElementsByTagName("address").item(1).attributes[1];
        var name = child.nodeName;
        test.ok((("domestic" == name) || ("street" == name)), 'namednodemapReturnFirstItemAssert')
        test.done();
    },

    /**
     *
     The "appendChild(newChild)" method adds the node
     "newChild" to the end of the list of children of the
     node.

     Retrieve the second employee and append a new Element
     node to the list of children.   The last node in the list
     is then retrieved and its NodeName examined.   The
     "getNodeName()" method should return "newChild".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     */
    nodeappendchild: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var createdNode;
        var lchild;
        var childName;
        var appendedChild;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        createdNode = doc.createElement("newChild");
        appendedChild = employeeNode.appendChild(createdNode);
        lchild = employeeNode.lastChild;

        childName = lchild.nodeName;

        test.equal(childName, "newChild", 'nodeAppendChildAssert1');

        test.done();
    },

    /**
     *
     If the "newChild" is already in the tree, it is first
     removed before the new one is appended.

     Retrieve the first child of the second employee and
     append the first child to the end of the list.   After
     the "appendChild(newChild)" method is invoked the first
     child should be the one that was second and the last
     child should be the one that was first.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     */
    nodeappendchildchildexists: function(test) {
        var success;
        var doc;
        var elementList;
        var childNode;
        var newChild;
        var lchild;
        var fchild;
        var lchildName;
        var fchildName;
        var appendedChild;
        var initialName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        childNode = elementList.item(1);
        newChild = childNode.firstChild;

        initialName = newChild.nodeName;

        appendedChild = childNode.appendChild(newChild);
        fchild = childNode.firstChild;

        fchildName = fchild.nodeName;

        lchild = childNode.lastChild;

        lchildName = lchild.nodeName;


        if(
            ("employeeId" == initialName)
        ) {
            test.equal(fchildName, "name", 'assert1_nowhitespace');
            test.equal(lchildName, "employeeId", 'assert2_nowhitespace');

        }

        else {
            test.equal(fchildName, "employeeId", 'assert1');
            test.equal(lchildName, "#text", 'assert2');

        }

        test.done();
    },

    /**
     *
     Create and populate a new DocumentFragment object and
     append it to the second employee.   After the
     "appendChild(newChild)" method is invoked retrieve the
     new nodes at the end of the list, they should be the
     three (Jos: was two) Element nodes from the DocumentFragment.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     * MODIFIED BY Jos Shepherd - added a third new child
     */
    nodeappendchilddocfragment: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var newdocFragment;
        var newChild1;
        var newChild2;
        var newChild3;

        var child;
        var childName;
        var result = new Array();

        var nodeType;
        var appendedChild;
        expected = new Array();
        expected[0] = "employeeId";
        expected[1] = "name";
        expected[2] = "position";
        expected[3] = "salary";
        expected[4] = "gender";
        expected[5] = "address";
        expected[6] = "newChild1";
        expected[7] = "newChild2";
        expected[8] = "newChild3";


        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        newdocFragment = doc.createDocumentFragment();
        newChild1 = doc.createElement("newChild1");
        newChild2 = doc.createElement("newChild2");
        newChild3 = doc.createElement("newChild3");

        appendedChild = newdocFragment.appendChild(newChild1);
        appendedChild = newdocFragment.appendChild(newChild2);
        appendedChild = newdocFragment.appendChild(newChild3);

        appendedChild = employeeNode.appendChild(newdocFragment);

        for(var indexN1009F = 0;indexN1009F < childList.length; indexN1009F++) {
            child = childList.item(indexN1009F);
            nodeType = child.nodeType;


            if(
                (1 == nodeType)
            ) {
                childName = child.nodeName;

                result[result.length] = childName;

            }

        }
        test.equal(result.join(), expected.join(), 'elementNames');

        test.done();
    },

    /**
     *
     The "appendChild(newChild)" method returns the node
     added.

     Append a newly created node to the child list of the
     second employee and check the NodeName returned.   The
     "getNodeName()" method should return "newChild".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     */
    nodeappendchildgetnodename: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var newChild;
        var appendNode;
        var childName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        newChild = doc.createElement("newChild");
        appendNode = employeeNode.appendChild(newChild);
        childName = appendNode.nodeName;

        test.equal(childName, "newChild", 'nodeAppendChildGetNodeNameAssert1');

        test.done();
    },

    /**
     *
     The "appendChild(newChild)" method raises a
     WRONG_DOCUMENT_ERR DOMException if the "newChild" was
     created from a different document than the one that
     created this node.

     Retrieve the second employee and attempt to append
     a node created from a different document.   An attempt
     to make such a replacement should raise the desired
     exception.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-184E7107')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    // djf: dom core allows this now, so invert sense of this test
    nodeappendchildnewchilddiffdocument: function(test) {
        var success;
        var doc1;
        var doc2;
        var newChild;
        var elementList;
        var elementNode;
        var appendedChild;
        doc1 = buildStaffDocument();
        doc2 = buildStaffDocument();
        newChild = doc1.createElement("newChild");
        elementList = doc2.getElementsByTagName("employee");
        elementNode = elementList.item(1);

        {
            success = true;
            try {
                appendedChild = elementNode.appendChild(newChild);
            }
            catch(ex) {
                success = false;
            }
            test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
        }

        test.done();
    },

    /**
     *
     The "appendChild(newChild)" method raises a
     HIERARCHY_REQUEST_ERR DOMException if the node to
     append is one of this node's ancestors.

     Retrieve the second employee and attempt to append
     an ancestor node(root node) to it.
     An attempt to make such an addition should raise the
     desired exception.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-184E7107')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='HIERARCHY_REQUEST_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    nodeappendchildnodeancestor: function(test) {
        var success;
        var doc;
        var newChild;
        var elementList;
        var employeeNode;
        var appendedChild;

        doc = buildStaffDocument();
        newChild = doc.documentElement;

        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);

        {
            success = false;
            try {
                appendedChild = employeeNode.appendChild(newChild);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 3);
            }
            test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
        }

        test.done();
    },



    /**
     *
     Collect the element names from Node.childNodes and check against expectations.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
     */
    nodechildnodes: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childNodes;
        var childNode;
        var childType;
        var childName;
        var elementNames = new Array();

        expectedElementNames = new Array();
        expectedElementNames[0] = "employeeId";
        expectedElementNames[1] = "name";
        expectedElementNames[2] = "position";
        expectedElementNames[3] = "salary";
        expectedElementNames[4] = "gender";
        expectedElementNames[5] = "address";


        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childNodes = employeeNode.childNodes;

        for(var indexN1006C = 0;indexN1006C < childNodes.length; indexN1006C++) {
            childNode = childNodes.item(indexN1006C);
            childType = childNode.nodeType;


            if(
                (1 == childType)
            ) {
                childName = childNode.nodeName;

                elementNames[elementNames.length] = childName;

            }

        }
        test.equal(elementNames.join(), expectedElementNames.join(), 'elementNames');

        test.done();
    },

    /**
     *
     Add an element and check that the previously retrieved childNodes NodeList
     is live.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
     */
    nodechildnodesappendchild: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var createdNode;
        var expectedLength;
        var length;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        expectedLength = childList.length;

        expectedLength += 1;
        createdNode = doc.createElement("text3");
        employeeNode = employeeNode.appendChild(createdNode);
        length = childList.length;

        test.equal(length, expectedLength, 'childNodeLength');

        test.done();
    },

    /**
     *
     The "getChildNodes()" method returns a NodeList
     that contains all children of this node.   If there
     are not any children, this is a NodeList that does not
     contain any nodes.

     Retrieve the Text node from the second child of the second
     employee and invoke the "getChildNodes()" method.   The
     NodeList returned should not have any nodes.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
     */
    nodechildnodesempty: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var secondCNode;
        var textNode;
        var childNodesList;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        secondCNode = childList.item(1);
        textNode = secondCNode.firstChild;

        childNodesList = textNode.childNodes;

        test.equal(childNodesList.length, 0, 'nodeChildNodesEmptyAssert1');

        test.done();
    },

    /**
     *
     If the cloneNode method is used to clone an
     Element node, all the attributes of the Element are
     copied along with their values.

     Retrieve the last child of the second employee and invoke
     the cloneNode method.   The
     duplicate node returned by the method should copy the
     attributes associated with this node.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     */
    nodecloneattributescopied: function(test) {
        var success;
        var doc;
        var elementList;
        var addressNode;
        var clonedNode;
        var attributes;
        var attributeNode;
        var attributeName;
        var result = new Array();

        expectedResult = new Array();
        expectedResult[0] = "domestic";
        expectedResult[1] = "street";


        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        addressNode = elementList.item(1);
        clonedNode = addressNode.cloneNode(false);
        attributes = clonedNode.attributes;

        for(var indexN10065 = 0;indexN10065 < attributes.length; indexN10065++) {
            attributeNode = attributes[indexN10065];
            attributeName = attributeNode.nodeName;

            result[result.length] = attributeName;

        }
        domTestHelper.assertEqualsCollection(test, result, expectedResult, 'nodeCloneAttributesCopiedAssert1');
        test.done();
    },

    /**
     *
     The "cloneNode(deep)" method does not copy text unless it
     is deep cloned.(Test for deep=false)

     Retrieve the fourth child of the second employee and
     the "cloneNode(deep)" method with deep=false.   The
     duplicate node returned by the method should not copy
     any text data contained in this node.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
     */
    nodeclonefalsenocopytext: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var childNode;
        var clonedNode;
        var lastChildNode;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        childNode = childList.item(3);
        clonedNode = childNode.cloneNode(false);
        lastChildNode = clonedNode.lastChild;

        test.equal(lastChildNode, null, 'noTextNodes');

        test.done();
    },

    /**
     *
     The duplicate node returned by the "cloneNode(deep)"
     method does not have a ParentNode.

     Retrieve the second employee and invoke the
     "cloneNode(deep)" method with deep=false.   The
     duplicate node returned should return null when the
     "getParentNode()" is invoked.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
     */
    nodeclonegetparentnull: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var clonedNode;
        var parentNode;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        clonedNode = employeeNode.cloneNode(false);
        parentNode = clonedNode.parentNode;

        test.equal(parentNode, null, 'nodeCloneGetParentNullAssert1');

        test.done();
    },

    /**
     *
     The "cloneNode(deep)" method returns a copy of the node
     only if deep=false.

     Retrieve the second employee and invoke the
     "cloneNode(deep)" method with deep=false.   The
     method should only clone this node.   The NodeName and
     length of the NodeList are checked.   The "getNodeName()"
     method should return "employee" and the "getLength()"
     method should return 0.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
     */
    nodeclonenodefalse: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var clonedNode;
        var cloneName;
        var cloneChildren;
        var length;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        clonedNode = employeeNode.cloneNode(false);
        cloneName = clonedNode.nodeName;

        test.equal(cloneName, "employee", 'name');
        cloneChildren = clonedNode.childNodes;

        length = cloneChildren.length;

        test.equal(length, 0, 'length');

        test.done();
    },

    /**
     *
     The "cloneNode(deep)" method returns a copy of the node
     and the subtree under it if deep=true.

     Retrieve the second employee and invoke the
     "cloneNode(deep)" method with deep=true.   The
     method should clone this node and the subtree under it.
     The NodeName of each child in the returned node is
     checked to insure the entire subtree under the second
     employee was cloned.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
     */
    nodeclonenodetrue: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var clonedNode;
        var clonedList;
        var clonedChild;
        var clonedChildName;
        var length;
        var result = new Array();

        expectedWhitespace = new Array();
        expectedWhitespace[0] = "#text";
        expectedWhitespace[1] = "employeeId";
        expectedWhitespace[2] = "#text";
        expectedWhitespace[3] = "name";
        expectedWhitespace[4] = "#text";
        expectedWhitespace[5] = "position";
        expectedWhitespace[6] = "#text";
        expectedWhitespace[7] = "salary";
        expectedWhitespace[8] = "#text";
        expectedWhitespace[9] = "gender";
        expectedWhitespace[10] = "#text";
        expectedWhitespace[11] = "address";
        expectedWhitespace[12] = "#text";

        expectedNoWhitespace = new Array();
        expectedNoWhitespace[0] = "employeeId";
        expectedNoWhitespace[1] = "name";
        expectedNoWhitespace[2] = "position";
        expectedNoWhitespace[3] = "salary";
        expectedNoWhitespace[4] = "gender";
        expectedNoWhitespace[5] = "address";


        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        length = childList.length;

        clonedNode = employeeNode.cloneNode(true);
        clonedList = clonedNode.childNodes;
        for(var indexN100AE = 0;indexN100AE < clonedList.length; indexN100AE++) {
            clonedChild = clonedList.item(indexN100AE);
            clonedChildName = clonedChild.nodeName;

            result[result.length] = clonedChildName;

        }

        if(
            (6 == length)
        ) {
            test.equal(result.join(), expectedNoWhitespace.join(), 'nowhitespace');

        }

        else {
            test.equal(result.join(), expectedWhitespace.join(), 'whitespace');

        }

        test.done();
    },

    /**
     *
     Retrieve the second salary and
     the "cloneNode(deep)" method with deep=true.   The
     duplicate node returned by the method should copy
     any text data contained in this node.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
     */
    nodeclonetruecopytext: function(test) {
        var success;
        var doc;
        var elementList;
        var childList;
        var childNode;
        var clonedNode;
        var lastChildNode;
        var childValue;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("salary");
        childNode = elementList.item(1);
        clonedNode = childNode.cloneNode(true);
        lastChildNode = clonedNode.lastChild;

        childValue = lastChildNode.nodeValue;

        test.equal(childValue, "35,000", 'nodeCloneTrueCopyTextAssert1');

        test.done();
    },

    /**
     *
     The "getAttributes()" method invoked on a Comment
     Node returns null.

     Find any comment that is an immediate child of the root
     and assert that Node.attributes is null.  Then create
     a new comment node (in case they had been omitted) and
     make the assertion.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
     */
    nodecommentnodeattributes: function(test) {
        var success;
        var doc;
        var childList;
        var childNode;
        var attrList;
        var nodeType;

        doc = buildStaffDocument();
        childList = doc.childNodes;

        for(var indexN10043 = 0;indexN10043 < childList.length; indexN10043++) {
            childNode = childList.item(indexN10043);
            nodeType = childNode.nodeType;


            if(
                (8 == nodeType)
            ) {
                attrList = childNode.attributes;

                test.equal(attrList, null, 'attributesNull');

            }

        }
        childNode = doc.createComment("This is a comment");
        attrList = childNode.attributes;

        test.equal(attrList, null, 'createdAttributesNull');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeName()" method for a
     Comment Node is "#comment".

     Retrieve the Comment node in the XML file
     and check the string returned by the "getNodeName()"
     method.   It should be equal to "#comment".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
     */
    nodecommentnodename: function(test) {
        var success;
        var doc;
        var elementList;
        var commentNode;
        var nodeType;
        var commentNodeName;

        doc = buildStaffDocument();
        elementList = doc.childNodes;

        for(var indexN10040 = 0;indexN10040 < elementList.length; indexN10040++) {
            commentNode = elementList.item(indexN10040);
            nodeType = commentNode.nodeType;


            if(
                (8 == nodeType)
            ) {
                commentNodeName = commentNode.nodeName;

                test.equal(commentNodeName, "#comment", 'commentNodeName');

            }

        }

        test.done();
    },

    /**
     *
     The "getNodeType()" method for a Comment Node
     returns the constant value 8.

     Retrieve the nodes from the document and check for
     a comment node and invoke the "getNodeType()" method.   This should
     return 8.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
     */
    nodecommentnodetype: function(test) {
        var success;
        var doc;
        var testList;
        var commentNode;
        var commentNodeName;
        var nodeType;

        doc = buildStaffDocument();
        testList = doc.childNodes;

        for(var indexN10040 = 0;indexN10040 < testList.length; indexN10040++) {
            commentNode = testList.item(indexN10040);
            commentNodeName = commentNode.nodeName;


            if(
                ("#comment" == commentNodeName)
            ) {
                nodeType = commentNode.nodeType;

                test.equal(nodeType, 8, 'nodeCommentNodeTypeAssert1');

            }

        }

        test.done();
    },

    /**
     *
     The string returned by the "getNodeValue()" method for a
     Comment Node is the content of the comment.

     Retrieve the comment in the XML file and
     check the string returned by the "getNodeValue()" method.
     It should be equal to "This is comment number 1".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
     */
    nodecommentnodevalue: function(test) {
        var success;
        var doc;
        var elementList;
        var commentNode;
        var commentName;
        var commentValue;

        doc = buildStaffDocument();
        elementList = doc.childNodes;

        for(var indexN10040 = 0;indexN10040 < elementList.length; indexN10040++) {
            commentNode = elementList.item(indexN10040);
            commentName = commentNode.nodeName;


            if(
                ("#comment" == commentName)
            ) {
                commentValue = commentNode.nodeValue;

                test.equal(commentValue, " This is comment number 1.", 'value');

            }

        }

        test.done();
    },

    /**
     *
     The string returned by the "getNodeName()" method for a
     DocumentFragment Node is "#document-frament".

     Retrieve the DOM document and invoke the
     "createDocumentFragment()" method and check the string
     returned by the "getNodeName()" method.   It should be
     equal to "#document-fragment".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
     */
    nodedocumentfragmentnodename: function(test) {
        var success;
        var doc;
        var docFragment;
        var documentFragmentName;

        doc = buildStaffDocument();
        docFragment = doc.createDocumentFragment();
        documentFragmentName = docFragment.nodeName;

        test.equal(documentFragmentName, "#document-fragment", 'nodeDocumentFragmentNodeNameAssert1');

        test.done();
    },

    /**
     *
     The "getNodeType()" method for a DocumentFragment Node
     returns the constant value 11.

     Invoke the "createDocumentFragment()" method and
     examine the NodeType of the document fragment
     returned by the "getNodeType()" method.   The method
     should return 11.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
     */
    nodedocumentfragmentnodetype: function(test) {
        var success;
        var doc;
        var documentFragmentNode;
        var nodeType;

        doc = buildStaffDocument();
        documentFragmentNode = doc.createDocumentFragment();
        nodeType = documentFragmentNode.nodeType;

        test.equal(nodeType, 11, 'nodeDocumentFragmentNodeTypeAssert1');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeValue()" method for a
     DocumentFragment Node is null.

     Retrieve the DOM document and invoke the
     "createDocumentFragment()" method and check the string
     returned by the "getNodeValue()" method.   It should be
     equal to null.

     * @author NIST
     * @author Mary Brady
     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     */
    nodedocumentfragmentnodevalue: function(test) {
        var success;
        var doc;
        var docFragment;
        var attrList;
        var value;

        doc = buildStaffDocument();
        docFragment = doc.createDocumentFragment();
        attrList = docFragment.attributes;

        test.equal(attrList, null, 'attributesNull');
        value = docFragment.nodeValue;

        test.equal(value, null, 'initiallyNull');

        test.done();
    },

    /**
     *
     The "getAttributes()" method invoked on a Document
     Node returns null.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
     */
    nodedocumentnodeattribute: function(test) {
        var success;
        var doc;
        var attrList;

        doc = buildStaffDocument();
        attrList = doc.attributes;

        test.equal(attrList, null, 'documentAttributesNull');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeName()" method for a
     Document Node is "#document".

     Retrieve the DOM document and check the string returned
     by the "getNodeName()" method.   It should be equal to
     "#document".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     */
    nodedocumentnodename: function(test) {
        var success;
        var doc;
        var documentName;

        doc = buildStaffDocument();
        documentName = doc.nodeName;

        test.equal(documentName, "#document", 'documentNodeName');

        test.done();
    },

    /**
     *
     The "getNodeType()" method for a Document Node
     returns the constant value 9.

     Retrieve the document and invoke the "getNodeType()"
     method.   The method should return 9.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     */
    nodedocumentnodetype: function(test) {
        var success;
        var doc;
        var nodeType;

        doc = buildStaffDocument();
        nodeType = doc.nodeType;

        test.equal(nodeType, 9, 'nodeDocumentNodeTypeAssert1');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeValue()" method for a
     Document Node is null.

     Retrieve the DOM Document and check the string returned
     by the "getNodeValue()" method.   It should be equal to
     null.


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     */
    nodedocumentnodevalue: function(test) {
        var success;
        var doc;
        var documentValue;

        doc = buildStaffDocument();
        documentValue = doc.nodeValue;

        test.equal(documentValue, null, 'documentNodeValueNull');

        test.done();
    },

    /**
     *
     Retrieve the DOCTYPE declaration from the XML file and
     check the string returned by the "getNodeName()"
     method.   It should be equal to "staff" or "svg".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     */
    nodedocumenttypenodename: function(test) {
        var success;
        var doc;
        var docType;
        var documentTypeName;

        doc = buildStaffDocument();
        docType = doc.doctype;

        test.notEqual(docType, null, 'docTypeNotNull');
        documentTypeName = docType.nodeName;


        test.equal(documentTypeName, "staff", 'documentName');

        test.done();
    },

    /**
     *
     The "getNodeType()" method for a DocumentType Node
     returns the constant value 10.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     */
    nodedocumenttypenodetype: function(test) {
        var success;
        var doc;
        var documentTypeNode;
        var nodeType;

        doc = buildStaffDocument();
        documentTypeNode = doc.doctype;

        test.notEqual(documentTypeNode, null, 'doctypeNotNull');
        nodeType = documentTypeNode.nodeType;

        test.equal(nodeType, 10, 'nodeType');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeValue()" method for a
     DocumentType Node is null.

     * @author NIST
     * @author Mary Brady
     */
    nodedocumenttypenodevalue: function(test) {
        var success;
        var doc;
        var docType;
        var attrList;

        doc = buildStaffDocument();
        docType = doc.doctype;

        test.notEqual(docType, null, 'docTypeNotNull');
        attrList = docType.attributes;

        test.equal(attrList, null, 'doctypeAttributesNull');

        test.done();
    },

    /**
     *
     The "getAttributes()" method invoked on an Element
     Node returns a NamedNodeMap containing the attributes
     of this node.

     Retrieve the last child of the third employee and
     invoke the "getAttributes()" method.   It should return
     a NamedNodeMap containing the attributes of the Element
     node.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     */
    nodeelementnodeattributes: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddr;
        var addrAttr;
        var attrNode;
        var attrName;
        var attrList = new Array();

        expected = new Array();
        expected[0] = "domestic";
        expected[1] = "street";


        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        testAddr = elementList.item(2);
        addrAttr = testAddr.attributes;

        for(var indexN1005C = 0;indexN1005C < addrAttr.length; indexN1005C++) {
            attrNode = addrAttr[indexN1005C];
            attrName = attrNode.nodeName;

            attrList[attrList.length] = attrName;

        }
        domTestHelper.assertEqualsCollection(test, attrList, expectedResult, 'nodeElementNodeValueAssert1');
        test.done();
    },

    /**
     *

     The string returned by the "getNodeName()" method for an

     Element Node is its tagName.



     Retrieve the first Element Node(Root Node) of the

     DOM object and check the string returned by the

     "getNodeName()" method.   It should be equal to its

     tagName.


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
     */
    nodeelementnodename: function(test) {
        var success;
        var doc;
        var elementNode;
        var elementName;

        doc = buildStaffDocument();
        elementNode = doc.documentElement;

        elementName = elementNode.nodeName;


        test.equal(elementName, "staff", 'nodeElementNodeNameAssert1');

        test.done();
    },

    /**
     *
     The "getNodeType()" method for an Element Node
     returns the constant value 1.

     Retrieve the root node and invoke the "getNodeType()"
     method.   The method should return 1.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     */
    nodeelementnodetype: function(test) {
        var success;
        var doc;
        var rootNode;
        var nodeType;

        doc = buildStaffDocument();
        rootNode = doc.documentElement;

        nodeType = rootNode.nodeType;

        test.equal(nodeType, 1, 'nodeElementNodeTypeAssert1');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeValue()" method for an
     Element Node is null.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     */
    nodeelementnodevalue: function(test) {
        var success;
        var doc;
        var elementNode;
        var elementValue;

        doc = buildStaffDocument();
        elementNode = doc.documentElement;

        elementValue = elementNode.nodeValue;

        test.equal(elementValue, null, 'elementNodeValueNull');

        test.done();
    },

    /**
     *
     The "getFirstChild()" method returns the first child
     of this node.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-169727388
     */
    nodegetfirstchild: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var fchildNode;
        var childName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        fchildNode = employeeNode.firstChild;

        childName = fchildNode.nodeName;


        if(
            ("#text" == childName)
        ) {
            fchildNode = fchildNode.nextSibling;

            childName = fchildNode.nodeName;


        }
        test.equal(childName, "employeeId", 'nodeName');

        test.done();
    },

    /**
     *

     If there is not a first child then the "getFirstChild()"

     method returns null.



     Retrieve the Text node form the second child of the first

     employee and invoke the "getFirstChild()" method.   It

     should return null.


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-169727388
     */
    nodegetfirstchildnull: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var secondChildNode;
        var textNode;
        var noChildNode;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(0);
        employeeList = employeeNode.childNodes;

        secondChildNode = employeeList.item(1);
        textNode = secondChildNode.firstChild;

        noChildNode = textNode.firstChild;

        test.equal(noChildNode, null, 'nodeGetFirstChildNullAssert1');

        test.done();
    },

    /**
     *
     The "getLastChild()" method returns the last child
     of this node.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-61AD09FB
     */
    nodegetlastchild: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var lchildNode;
        var childName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        lchildNode = employeeNode.lastChild;

        childName = lchildNode.nodeName;


        if(
            ("#text" == childName)
        ) {
            lchildNode = lchildNode.previousSibling;

            childName = lchildNode.nodeName;


        }
        test.equal(childName, "address", 'nodeName');

        test.done();
    },

    /**
     *

     If there is not a last child then the "getLastChild()"

     method returns null.



     Retrieve the Text node from the second child of the first

     employee and invoke the "getLastChild()" method.   It

     should return null.


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-61AD09FB
     */
    nodegetlastchildnull: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var secondChildNode;
        var textNode;
        var noChildNode;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(0);
        employeeList = employeeNode.childNodes;

        secondChildNode = employeeList.item(1);
        textNode = secondChildNode.firstChild;

        noChildNode = textNode.lastChild;

        test.equal(noChildNode, null, 'nodeGetLastChildNullAssert1');

        test.done();
    },

    /**
     *
     The "getNextSibling()" method returns the node immediately
     following this node.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6AC54C2F
     */
    nodegetnextsibling: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeIdNode;
        var nsNode;
        var nsName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employeeId");
        employeeIdNode = elementList.item(1);
        nsNode = employeeIdNode.nextSibling;

        nsName = nsNode.nodeName;


        if(
            ("#text" == nsName)
        ) {
            nsNode = nsNode.nextSibling;

            nsName = nsNode.nodeName;


        }
        test.equal(nsName, "name", 'nodeName');

        test.done();
    },

    /**
     *

     If there is not a node immediately following this node the

     "getNextSibling()" method returns null.



     Retrieve the first child of the second employee and

     invoke the "getNextSibling()" method.   It should

     be set to null.


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6AC54C2F
     */
    nodegetnextsiblingnull: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var lcNode;
        var nsNode;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        lcNode = employeeNode.lastChild;

        nsNode = lcNode.nextSibling;

        test.equal(nsNode, null, 'nodeGetNextSiblingNullAssert1');

        test.done();
    },

    /**
     *
     The "getOwnerDocument()" method returns the Document
     object associated with this node.

     Retrieve the second employee and examine Document
     returned by the "getOwnerDocument()" method.   Invoke
     the "getDocumentElement()" on the Document which will
     return an Element that is equal to "staff".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#node-ownerDoc
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
     */
    nodegetownerdocument: function(test) {
        var success;
        var doc;
        var elementList;
        var docNode;
        var ownerDocument;
        var docElement;
        var elementName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        docNode = elementList.item(1);
        ownerDocument = docNode.ownerDocument;

        docElement = ownerDocument.documentElement;

        elementName = docElement.nodeName;


        test.equal(elementName, "staff", 'nodeGetOwnerDocumentAssert1');

        test.done();
    },

    /**
     *
     The "getOwnerDocument()" method returns null if the target
     node itself is a document.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#node-ownerDoc
     */
    nodegetownerdocumentnull: function(test) {
        var success;
        var doc;
        var ownerDocument;

        doc = buildStaffDocument();
        ownerDocument = doc.ownerDocument;

        test.equal(ownerDocument, null, 'documentOwnerDocumentNull');

        test.done();
    },

    /**
     *
     The "getPreviousSibling()" method returns the node
     immediately preceding this node.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-640FB3C8
     */
    nodegetprevioussibling: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var psNode;
        var psName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(1);
        psNode = nameNode.previousSibling;

        psName = psNode.nodeName;


        if(
            ("#text" == psName)
        ) {
            psNode = psNode.previousSibling;

            psName = psNode.nodeName;


        }
        test.equal(psName, "employeeId", 'nodeName');

        test.done();
    },

    /**
     *

     If there is not a node immediately preceding this node the

     "getPreviousSibling()" method returns null.



     Retrieve the first child of the second employee and

     invoke the "getPreviousSibling()" method.   It should

     be set to null.


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-640FB3C8
     */
    nodegetprevioussiblingnull: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var fcNode;
        var psNode;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(2);
        fcNode = employeeNode.firstChild;

        psNode = fcNode.previousSibling;

        test.equal(psNode, null, 'nodeGetPreviousSiblingNullAssert1');

        test.done();
    },

    /**
     *
     The "hasChildNodes()" method returns true if the node
     has children.

     Retrieve the root node("staff") and invoke the
     "hasChildNodes()" method.   It should return the boolean
     value "true".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-810594187
     */
    nodehaschildnodes: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var state;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        state = employeeNode.hasChildNodes();
        test.ok(state, 'nodeHasChildAssert1');

        test.done();
    },

    /**
     *
     The "hasChildNodes()" method returns false if the node
     does not have any children.

     Retrieve the Text node inside the first child of the
     second employee and invoke the "hasChildNodes()" method.
     It should return the boolean value "false".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-810594187
     */
    nodehaschildnodesfalse: function(test) {
        var success;
        var doc;
        var elementList;
        var child;
        var employeeIdList;
        var employeeNode;
        var textNode;
        var state;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        child = elementList.item(1);
        employeeIdList = child.childNodes;

        employeeNode = employeeIdList.item(1);
        textNode = employeeNode.firstChild;

        state = textNode.hasChildNodes();
        test.equal(state, false, 'nodeHasChildFalseAssert1');

        test.done();
    },

    /**
     *
     The "insertBefore(newChild,refChild)" method inserts the
     node "newChild" before the node "refChild".

     Insert a newly created Element node before the eigth
     child of the second employee and check the "newChild"
     and "refChild" after insertion for correct placement.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     */
    nodeinsertbefore: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var refChild;
        var newChild;
        var child;
        var childName;
        var length;
        var insertedNode;
        var actual = new Array();

        expectedWithWhitespace = new Array();
        expectedWithWhitespace[0] = "#text";
        expectedWithWhitespace[1] = "employeeId";
        expectedWithWhitespace[2] = "#text";
        expectedWithWhitespace[3] = "name";
        expectedWithWhitespace[4] = "#text";
        expectedWithWhitespace[5] = "position";
        expectedWithWhitespace[6] = "#text";
        expectedWithWhitespace[7] = "newChild";
        expectedWithWhitespace[8] = "salary";
        expectedWithWhitespace[9] = "#text";
        expectedWithWhitespace[10] = "gender";
        expectedWithWhitespace[11] = "#text";
        expectedWithWhitespace[12] = "address";
        expectedWithWhitespace[13] = "#text";

        expectedWithoutWhitespace = new Array();
        expectedWithoutWhitespace[0] = "employeeId";
        expectedWithoutWhitespace[1] = "name";
        expectedWithoutWhitespace[2] = "position";
        expectedWithoutWhitespace[3] = "newChild";
        expectedWithoutWhitespace[4] = "salary";
        expectedWithoutWhitespace[5] = "gender";
        expectedWithoutWhitespace[6] = "address";

        var expected = new Array();


        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        length = childList.length;


        if(
            (6 == length)
        ) {
            refChild = childList.item(3);
            expected =  expectedWithoutWhitespace;

        }

        else {
            refChild = childList.item(7);
            expected =  expectedWithWhitespace;

        }
        newChild = doc.createElement("newChild");
        insertedNode = employeeNode.insertBefore(newChild,refChild);
        for(var indexN100DC = 0;indexN100DC < childList.length; indexN100DC++) {
            child = childList.item(indexN100DC);
            childName = child.nodeName;

            actual[actual.length] = childName;

        }
        test.equal(actual.join(), expected.join(), 'nodeNames');

        test.done();
    },

    /**
     *
     If the "newChild" is a DocumentFragment object then all
     its children are inserted in the same order before the
     the "refChild".

     Create a DocumentFragment object and populate it with
     two Element nodes.   Retrieve the second employee and
     insert the newly created DocumentFragment before its
     fourth child.   The second employee should now have two
     extra children("newChild1" and "newChild2") at
     positions fourth and fifth respectively.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     */
    nodeinsertbeforedocfragment: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var refChild;
        var newdocFragment;
        var newChild1;
        var newChild2;
        var child;
        var childName;
        var appendedChild;
        var insertedNode;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        refChild = childList.item(3);
        newdocFragment = doc.createDocumentFragment();
        newChild1 = doc.createElement("newChild1");
        newChild2 = doc.createElement("newChild2");
        appendedChild = newdocFragment.appendChild(newChild1);
        appendedChild = newdocFragment.appendChild(newChild2);
        insertedNode = employeeNode.insertBefore(newdocFragment,refChild);
        child = childList.item(3);
        childName = child.nodeName;

        test.equal(childName, "newChild1", 'childName3');
        child = childList.item(4);
        childName = child.nodeName;

        test.equal(childName, "newChild2", 'childName4');

        test.done();
    },


    /**
     *
     The "insertBefore(newChild,refChild)" method raises a
     WRONG_DOCUMENT_ERR DOMException if the "newChild" was
     created from a different document than the one that
     created this node.

     Retrieve the second employee and attempt to insert a new
     child that was created from a different document than the
     one that created the second employee.   An attempt to
     insert such a child should raise the desired exception.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='WRONG_DOCUMENT_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-952280727')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='WRONG_DOCUMENT_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     */
    // djf: dom core allows this now, so invert sense of this test
    nodeinsertbeforenewchilddiffdocument: function(test) {
        var success;
        var doc1;
        var doc2;
        var refChild;
        var newChild;
        var elementList;
        var elementNode;
        var insertedNode;
        doc1 = buildStaffDocument();
        doc2 = buildStaffDocument();
        newChild = doc1.createElement("newChild");
        elementList = doc2.getElementsByTagName("employee");
        elementNode = elementList.item(1);
        refChild = elementNode.firstChild;


        {
            success = true;
            try {
                insertedNode = elementNode.insertBefore(newChild,refChild);
            }
            catch(ex) {
                success = false;
            }
            test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
        }

        test.done();
    },

    /**
     *
     If the "newChild" is already in the tree, the
     "insertBefore(newChild,refChild)" method must first
     remove it before the insertion takes place.

     Insert a node Element ("employeeId") that is already
     present in the tree.   The existing node should be
     removed first and the new one inserted.   The node is
     inserted at a different position in the tree to assure
     that it was indeed inserted.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     */
    nodeinsertbeforenewchildexists: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var refChild;
        var newChild;
        var child;
        var length;
        var childName;
        var insertedNode;
        expectedWhitespace = new Array();
        expectedWhitespace[0] = "#text";
        expectedWhitespace[1] = "#text";
        expectedWhitespace[2] = "name";
        expectedWhitespace[3] = "#text";
        expectedWhitespace[4] = "position";
        expectedWhitespace[5] = "#text";
        expectedWhitespace[6] = "salary";
        expectedWhitespace[7] = "#text";
        expectedWhitespace[8] = "gender";
        expectedWhitespace[9] = "#text";
        expectedWhitespace[10] = "employeeId";
        expectedWhitespace[11] = "address";
        expectedWhitespace[12] = "#text";

        expectedNoWhitespace = new Array();
        expectedNoWhitespace[0] = "name";
        expectedNoWhitespace[1] = "position";
        expectedNoWhitespace[2] = "salary";
        expectedNoWhitespace[3] = "gender";
        expectedNoWhitespace[4] = "employeeId";
        expectedNoWhitespace[5] = "address";

        var expected = new Array();

        var result = new Array();


        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        length = childList.length;


        if(
            (6 == length)
        ) {
            expected =  expectedNoWhitespace;
            refChild = childList.item(5);
            newChild = childList.item(0);

        }

        else {
            expected =  expectedWhitespace;
            refChild = childList.item(11);
            newChild = childList.item(1);

        }
        insertedNode = employeeNode.insertBefore(newChild,refChild);
        for(var indexN100DD = 0;indexN100DD < childList.length; indexN100DD++) {
            child = childList.item(indexN100DD);
            childName = child.nodeName;

            result[result.length] = childName;

        }
        test.equal(result.join(), expected.join(), 'childNames');

        test.done();
    },

    /**
     *
     The "insertBefore(newChild,refChild)" method raises a
     HIERARCHY_REQUEST_ERR DOMException if the node to be
     inserted is one of this nodes ancestors.

     Retrieve the second employee and attempt to insert a
     node that is one of its ancestors(root node).   An
     attempt to insert such a node should raise the
     desired exception.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-952280727')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='HIERARCHY_REQUEST_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    nodeinsertbeforenodeancestor: function(test) {
        var success;
        var doc;
        var newChild;
        var elementList;
        var employeeNode;
        var childList;
        var refChild;
        var insertedNode;

        doc = buildStaffDocument();
        newChild = doc.documentElement;

        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        refChild = childList.item(0);

        {
            success = false;
            try {
                insertedNode = employeeNode.insertBefore(newChild,refChild);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 3);
            }
            test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
        }

        test.done();
    },

    /**
     *
     The "insertBefore(newChild,refchild)" method returns
     the node being inserted.

     Insert an Element node before the fourth
     child of the second employee and check the node
     returned from the "insertBefore(newChild,refChild)"
     method.   The node returned should be "newChild".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     */
    nodeinsertbeforenodename: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var refChild;
        var newChild;
        var insertedNode;
        var childName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        refChild = childList.item(3);
        newChild = doc.createElement("newChild");
        insertedNode = employeeNode.insertBefore(newChild,refChild);
        childName = insertedNode.nodeName;

        test.equal(childName, "newChild", 'nodeInsertBeforeNodeNameAssert1');

        test.done();
    },

    /**
     *
     The "insertBefore(newChild,refChild)" method raises a
     NOT_FOUND_ERR DOMException if the reference child is
     not a child of this node.

     Retrieve the second employee and attempt to insert a
     new node before a reference node that is not a child
     of this node.   An attempt to insert before a non child
     node should raise the desired exception.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-952280727')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    nodeinsertbeforerefchildnonexistent: function(test) {
        var success;
        var doc;
        var refChild;
        var newChild;
        var elementList;
        var elementNode;
        var insertedNode;

        doc = buildStaffDocument();
        newChild = doc.createElement("newChild");
        refChild = doc.createElement("refChild");
        elementList = doc.getElementsByTagName("employee");
        elementNode = elementList.item(1);

        {
            success = false;
            try {
                insertedNode = elementNode.insertBefore(newChild,refChild);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 8);
            }
            test.ok(success, 'throw_NOT_FOUND_ERR');
        }

        test.done();
    },

    /**
     *
     If the "refChild" is null then the
     "insertBefore(newChild,refChild)" method inserts the
     node "newChild" at the end of the list of children.

     Retrieve the second employee and invoke the
     "insertBefore(newChild,refChild)" method with
     refChild=null.   Since "refChild" is null the "newChild"
     should be added to the end of the list.   The last item
     in the list is checked after insertion.   The last Element
     node of the list should be "newChild".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
     */
    nodeinsertbeforerefchildnull: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var refChild = null;

        var newChild;
        var child;
        var childName;
        var insertedNode;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        newChild = doc.createElement("newChild");
        insertedNode = employeeNode.insertBefore(newChild,refChild);
        child = employeeNode.lastChild;

        childName = child.nodeName;

        test.equal(childName, "newChild", 'nodeInsertBeforeRefChildNullAssert1');

        test.done();
    },

    /**
     *
     Create a list of all the children elements of the third
     employee and access its first child by using an index
     of 0.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
     */
    nodelistindexequalzero: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var child;
        var childName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(2);
        employeeList = employeeNode.childNodes;

        child = employeeList.item(0);
        childName = child.nodeName;


        if(
            !("#text" == childName)
        ) {
            test.equal(childName, "employeeId", 'childName');

        }

        test.done();
    },

    /**
     *
     The "getLength()" method returns the number of nodes
     in the list should be 6 (no whitespace) or 13.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-203510337
     */
    nodelistindexgetlength: function(test) {
        var doc = buildStaffDocument();
        var employeeList = doc.getElementsByTagName("employee").item(2).childNodes;
        test.equal(employeeList.length, 6)
        test.done();
    },

    /**
     *
     The "getLength()" method returns the number of nodes
     in the list.(Test for EMPTY list)

     Create a list of all the children of the Text node
     inside the first child of the third employee and
     invoke the "getLength()" method.   It should contain
     the value 0.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-203510337
     */
    nodelistindexgetlengthofemptylist: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var childNode;
        var textNode;
        var textList;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(2);
        employeeList = employeeNode.childNodes;

        childNode = employeeList.item(1);
        textNode = childNode.firstChild;

        textList = textNode.childNodes;

        test.equal(textList.length, 0, 'nodelistIndexGetLengthOfEmptyListAssert');

        test.done();
    },

    /**
     *
     Create a list of all the children elements of the third
     employee and access its fourth child by using an index
     of 3.  This should result in "name" being
     selected.  Further we evaluate its content(by using
     the "getNodeName()" method) to ensure the proper
     element was accessed.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
     */
    nodelistindexnotzero: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var child;
        var length;
        var childName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(2);
        employeeList = employeeNode.childNodes;

        length = employeeList.length;


        if(
            (6 == length)
        ) {
            child = employeeList.item(1);

        }

        else {
            child = employeeList.item(3);

        }
        childName = child.nodeName;

        test.equal(childName, "name", 'nodeName');

        test.done();
    },

    /**
     *
     Get the first child of the third employee using NodeList.item(0)
     which will either be a Text node (whitespace) or employeeId element.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
     */
    nodelistreturnfirstitem: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var child;
        var childName;
        var length;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(2);
        employeeList = employeeNode.childNodes;

        child = employeeList.item(0);
        childName = child.nodeName;

        length = employeeList.length;


        if(
            (6 == length)
        ) {
            test.equal(childName, "employeeId", 'firstChildNoWhitespace');

        }

        else {
            test.equal(childName, "#text", 'firstChildWithWhitespace');

        }

        test.done();
    },

    /**
     *
     Get this last child of the third employee using NodeList.item(NodeList.length - 1)
     and check that it is either a Text element (with whitespace) or an address element.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
     */
    nodelistreturnlastitem: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var child;
        var childName;
        var length;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(2);
        employeeList = employeeNode.childNodes;

        length = employeeList.length;


        if(
            (6 == length)
        ) {
            child = employeeList.item(5);
            childName = child.nodeName;

            test.equal(childName, "address", 'nodeName1');

        }

        else {
            child = employeeList.item(12);
            childName = child.nodeName;

            test.equal(childName, "#text", 'nodeName2');

        }

        test.done();
    },

    /**
     *
     The range of valid child node indices is 0 thru length -1

     Create a list of all the children elements of the third
     employee and traverse the list from index=0 thru
     length -1.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-203510337
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
     */
    nodelisttraverselist: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var employeeList;
        var child;
        var childName;
        var result = new Array();

        var length;
        expectedWhitespace = new Array();
        expectedWhitespace[0] = "#text";
        expectedWhitespace[1] = "employeeId";
        expectedWhitespace[2] = "#text";
        expectedWhitespace[3] = "name";
        expectedWhitespace[4] = "#text";
        expectedWhitespace[5] = "position";
        expectedWhitespace[6] = "#text";
        expectedWhitespace[7] = "salary";
        expectedWhitespace[8] = "#text";
        expectedWhitespace[9] = "gender";
        expectedWhitespace[10] = "#text";
        expectedWhitespace[11] = "address";
        expectedWhitespace[12] = "#text";

        expectedNoWhitespace = new Array();
        expectedNoWhitespace[0] = "employeeId";
        expectedNoWhitespace[1] = "name";
        expectedNoWhitespace[2] = "position";
        expectedNoWhitespace[3] = "salary";
        expectedNoWhitespace[4] = "gender";
        expectedNoWhitespace[5] = "address";


        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(2);
        employeeList = employeeNode.childNodes;

        length = employeeList.length;

        for(var indexN100A4 = 0;indexN100A4 < employeeList.length; indexN100A4++) {
            child = employeeList.item(indexN100A4);
            childName = child.nodeName;

            result[result.length] = childName;

        }

        if(
            (6 == length)
        ) {
            test.equal(result.join(), expectedNoWhitespace.join(), 'nowhitespace');

        }

        else {
            test.equal(result.join(), expectedWhitespace.join(), 'whitespace');

        }

        test.done();
    },


    /**
     *
     The "getParentNode()" method returns the parent
     of this node.

     Retrieve the second employee and invoke the
     "getParentNode()" method on this node.   It should
     be set to "staff".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1060184317
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
     */
    nodeparentnode: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var parentNode;
        var parentName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        parentNode = employeeNode.parentNode;

        parentName = parentNode.nodeName;


        test.equal(parentName, "staff", 'nodeParentNodeAssert1');

        test.done();
    },

    /**
     *
     The "getParentNode()" method invoked on a node that has
     just been created and not yet added to the tree is null.

     Create a new "employee" Element node using the
     "createElement(name)" method from the Document interface.
     Since this new node has not yet been added to the tree,
     the "getParentNode()" method will return null.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1060184317
     */
    nodeparentnodenull: function(test) {
        var success;
        var doc;
        var createdNode;
        var parentNode;

        doc = buildStaffDocument();
        createdNode = doc.createElement("employee");
        parentNode = createdNode.parentNode;

        test.equal(parentNode, null, 'parentNode');

        test.done();
    },

    /**
     *

     The "getAttributes()" method invoked on a Processing

     Instruction Node returns null.



     Retrieve the Processing Instruction node and invoke

     the "getAttributes()" method.   It should return null.


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     */
    nodeprocessinginstructionnodeattributes: function(test) {
        var success;
        var doc;
        var testList;
        var piNode;
        var attrList;

        doc = buildStaffDocument();
        testList = doc.childNodes;

        piNode = testList.item(0);
        attrList = piNode.attributes;

        test.equal(attrList, null, 'nodeProcessingInstructionNodeAttrAssert1');

        test.done();
    },

    /**
     *

     The string returned by the "getNodeName()" method for a

     Processing Instruction Node is the target.



     Retrieve the Processing Instruction Node in the XML file

     and check the string returned by the "getNodeName()"

     method.   It should be equal to "XML-STYLE".


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     */
    nodeprocessinginstructionnodename: function(test) {
        var success;
        var doc;
        var testList;
        var piNode;
        var piName;

        doc = buildStaffDocument();
        testList = doc.childNodes;

        piNode = testList.item(0);
        piName = piNode.nodeName;

        test.equal(piName, "TEST-STYLE", 'nodeProcessingInstructionNodeNameAssert1');

        test.done();
    },

    /**
     *

     The "getNodeType()" method for a Processing Instruction

     node returns the constant value 7.



     Retrieve a NodeList of child elements from the document.

     Retrieve the first child and invoke the "getNodeType()"

     method.   The method should return 7.


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     */
    nodeprocessinginstructionnodetype: function(test) {
        var success;
        var doc;
        var testList;
        var piNode;
        var nodeType;

        doc = buildStaffDocument();
        testList = doc.childNodes;

        piNode = testList.item(0);
        nodeType = piNode.nodeType;

        test.equal(nodeType, 7, 'nodeProcessingInstructionNodeTypeAssert1');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeValue()" method for a
     Processing Instruction Node is the content of the
     Processing Instruction(exclude the target).

     Retrieve the Processing Instruction node in the XML file
     and check the string returned by the "getNodeValue()"
     method.   It should be equal to "PIDATA".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     */
    nodeprocessinginstructionnodevalue: function(test) {
        var success;
        var doc;
        var testList;
        var piNode;
        var piValue;

        doc = buildStaffDocument();
        testList = doc.childNodes;

        piNode = testList.item(0);
        piValue = piNode.nodeValue;

        test.equal(piValue, "PIDATA", 'value');

        test.done();
    },

    /**
     *
     Setting the nodeValue should change the value returned by
     nodeValue and ProcessingInstruction.getData.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1004215813
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-837822393
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=181
     */
    nodeprocessinginstructionsetnodevalue: function(test) {
        var success;
        var doc;
        var testList;
        var piNode;
        var piValue;

        doc = buildStaffDocument();
        testList = doc.childNodes;

        piNode = testList.item(0);
        piNode.nodeValue = "Something different";

        piValue = piNode.nodeValue;

        test.equal(piValue, "Something different", 'nodeValue');
        piValue = piNode.data;

        test.equal(piValue, "Something different", 'data');

        test.done();
    },

    /**
     *
     The "removeChild(oldChild)" method removes the child node
     indicated by "oldChild" from the list of children and
     returns it.

     Remove the first employee by invoking the
     "removeChild(oldChild)" method an checking the
     node returned by the "getParentNode()" method.   It
     should be set to null.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
     */
    noderemovechild: function(test) {
        var success;
        var doc;
        var rootNode;
        var childList;
        var childToRemove;
        var removedChild;
        var parentNode;

        doc = buildStaffDocument();
        rootNode = doc.documentElement;

        childList = rootNode.childNodes;

        childToRemove = childList.item(1);
        removedChild = rootNode.removeChild(childToRemove);
        parentNode = removedChild.parentNode;

        test.equal(parentNode, null, 'nodeRemoveChildAssert1');

        test.done();
    },

    /**
     *
     Remove the first child of the second employee
     and check the NodeName returned by the
     "removeChild(oldChild)" method.   The returned node
     should have a NodeName equal to "#text" or employeeId depending on whitespace.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
     */
    noderemovechildgetnodename: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var oldChild;
        var removedChild;
        var childName;
        var length;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        length = childList.length;

        oldChild = childList.item(0);
        removedChild = employeeNode.removeChild(oldChild);
        childName = removedChild.nodeName;


        if(
            (6 == length)
        ) {
            test.equal(childName, "employeeId", 'nowhitespace');

        }

        else {
            test.equal(childName, "#text", 'whitespace');

        }

        test.done();
    },

    /**
     *
     Retrieve the second employee and remove its first child.
     After the removal, the second employee should have five or twelve
     children and the first child should now be the child
     that used to be at the second position in the list.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
     */
    noderemovechildnode: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var oldChild;
        var child;
        var childName;
        var length;
        var removedChild;
        var removedName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        oldChild = childList.item(0);
        removedChild = employeeNode.removeChild(oldChild);
        removedName = removedChild.nodeName;

        child = childList.item(0);
        childName = child.nodeName;

        length = childList.length;


        if(
            (5 == length)
        ) {
            test.equal(removedName, "employeeId", 'removedNameNoWhitespace');
            test.equal(childName, "name", 'childNameNoWhitespace');

        }

        else {
            test.equal(removedName, "#text", 'removedName');
            test.equal(childName, "employeeId", 'childName');
            test.equal(length, 12, 'length');

        }

        test.done();
    },

    /**
     *
     The "removeChild(oldChild)" method raises a
     NOT_FOUND_ERR DOMException if the old child is
     not a child of this node.

     Retrieve the second employee and attempt to remove a
     node that is not one of its children.   An attempt to
     remove such a node should raise the desired exception.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-1734834066')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    noderemovechildoldchildnonexistent: function(test) {
        var success;
        var doc;
        var oldChild;
        var elementList;
        var elementNode;
        var removedChild;

        doc = buildStaffDocument();
        oldChild = doc.createElement("oldChild");
        elementList = doc.getElementsByTagName("employee");
        elementNode = elementList.item(1);

        {
            success = false;
            try {
                removedChild = elementNode.removeChild(oldChild);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 8);
            }
            test.ok(success, 'throw_NOT_FOUND_ERR');
        }

        test.done();
    },

    /**
     *
     The "replaceChild(newChild,oldChild)" method replaces
     the node "oldChild" with the node "newChild".

     Replace the first element of the second employee with
     a newly created Element node.   Check the first position
     after the replacement operation is completed.   The new
     Element should be "newChild".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     */
    nodereplacechild: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var oldChild;
        var newChild;
        var child;
        var childName;
        var replacedNode;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        oldChild = childList.item(0);
        newChild = doc.createElement("newChild");
        replacedNode = employeeNode.replaceChild(newChild,oldChild);
        child = childList.item(0);
        childName = child.nodeName;

        test.equal(childName, "newChild", 'nodeReplaceChildAssert1');

        test.done();
    },


    /**
     *
     The "replaceChild(newChild,oldChild)" method raises a
     WRONG_DOCUMENT_ERR DOMException if the "newChild" was
     created from a different document than the one that
     created this node.

     Retrieve the second employee and attempt to replace one
     of its children with a node created from a different
     document.   An attempt to make such a replacement
     should raise the desired exception.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-785887307')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     */
    // djf: dom core allows this now, so invert sense of this test
    nodereplacechildnewchilddiffdocument: function(test) {
        var success;
        var doc1;
        var doc2;
        var oldChild;
        var newChild;
        var elementList;
        var elementNode;
        var replacedChild;
        doc1 = buildStaffDocument();
        doc2 = buildStaffDocument();
        newChild = doc1.createElement("newChild");
        elementList = doc2.getElementsByTagName("employee");
        elementNode = elementList.item(1);
        oldChild = elementNode.firstChild;


        {
            success = true;
            try {
                replacedChild = elementNode.replaceChild(newChild,oldChild);
            }
            catch(ex) {
                success = false;
            }
            test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
        }

        test.done();
    },

    /**
     *
     Retrieve the second employee and replace its TWELFTH
     child(address) with its SECOND child(employeeId).   After the
     replacement the second child should now be the one that used
     to be at the third position and the TWELFTH child should be the
     one that used to be at the SECOND position.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     */
    nodereplacechildnewchildexists: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var oldChild = null;

        var newChild = null;

        var childName;
        var childNode;
        var length;
        var actual = new Array();

        var expected = new Array();

        expectedWithoutWhitespace = new Array();
        expectedWithoutWhitespace[0] = "name";
        expectedWithoutWhitespace[1] = "position";
        expectedWithoutWhitespace[2] = "salary";
        expectedWithoutWhitespace[3] = "gender";
        expectedWithoutWhitespace[4] = "employeeId";

        expectedWithWhitespace = new Array();
        expectedWithWhitespace[0] = "#text";
        expectedWithWhitespace[1] = "#text";
        expectedWithWhitespace[2] = "name";
        expectedWithWhitespace[3] = "#text";
        expectedWithWhitespace[4] = "position";
        expectedWithWhitespace[5] = "#text";
        expectedWithWhitespace[6] = "salary";
        expectedWithWhitespace[7] = "#text";
        expectedWithWhitespace[8] = "gender";
        expectedWithWhitespace[9] = "#text";
        expectedWithWhitespace[10] = "employeeId";
        expectedWithWhitespace[11] = "#text";

        var replacedChild;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        length = childList.length;


        if(
            (13 == length)
        ) {
            newChild = childList.item(1);
            oldChild = childList.item(11);
            expected =  expectedWithWhitespace;

        }

        else {
            newChild = childList.item(0);
            oldChild = childList.item(5);
            expected =  expectedWithoutWhitespace;

        }

        replacedChild = employeeNode.replaceChild(newChild,oldChild);
        test.equal(replacedChild, oldChild, 'return_value_same')

        for(var indexN100DE = 0;indexN100DE < childList.length; indexN100DE++) {

            childNode = childList.item(indexN100DE);

            childName = childNode.nodeName;
            actual[actual.length] = childName;

        }
        test.equal(actual.join(), expected.join(), 'childNames');

        test.done();
    },

    /**
     *
     The "replaceChild(newChild,oldChild)" method raises a
     HIERARCHY_REQUEST_ERR DOMException if the node to put
     in is one of this node's ancestors.

     Retrieve the second employee and attempt to replace
     one of its children with an ancestor node(root node).
     An attempt to make such a replacement should raise the
     desired exception.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-785887307')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='HIERARCHY_REQUEST_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    nodereplacechildnodeancestor: function(test) {
        var success;
        var doc;
        var newChild;
        var elementList;
        var employeeNode;
        var childList;
        var oldChild;
        var replacedNode;

        doc = buildStaffDocument();
        newChild = doc.documentElement;

        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        oldChild = childList.item(0);

        {
            success = false;
            try {
                replacedNode = employeeNode.replaceChild(newChild,oldChild);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 3);
            }
            test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
        }

        test.done();
    },

    /**
     *
     Replace the second Element of the second employee with
     a newly created node Element and check the NodeName
     returned by the "replaceChild(newChild,oldChild)"
     method.   The returned node should have a NodeName equal
     to "employeeId".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     */
    nodereplacechildnodename: function(test) {
        var success;
        var doc;
        var elementList;
        var employeeNode;
        var childList;
        var oldChild;
        var newChild;
        var replacedNode;
        var length;
        var childName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("employee");
        employeeNode = elementList.item(1);
        childList = employeeNode.childNodes;

        length = childList.length;

        oldChild = childList.item(1);
        newChild = doc.createElement("newChild");
        replacedNode = employeeNode.replaceChild(newChild,oldChild);
        childName = replacedNode.nodeName;


        if(
            (6 == length)
        ) {
            test.equal(childName, "name", 'nowhitespace');

        }

        else {
            test.equal(childName, "employeeId", 'whitespace');

        }

        test.done();
    },


    /**
     *
     The "replaceChild(newChild,oldChild)" method raises a
     NOT_FOUND_ERR DOMException if the old child is
     not a child of this node.

     Retrieve the second employee and attempt to replace a
     node that is not one of its children.   An attempt to
     replace such a node should raise the desired exception.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-785887307')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    nodereplacechildoldchildnonexistent: function(test) {
        var success;
        var doc;
        var oldChild;
        var newChild;
        var elementList;
        var elementNode;
        var replacedNode;

        doc = buildStaffDocument();
        newChild = doc.createElement("newChild");
        oldChild = doc.createElement("oldChild");
        elementList = doc.getElementsByTagName("employee");
        elementNode = elementList.item(1);

        {
            success = false;
            try {
                replacedNode = elementNode.replaceChild(newChild,oldChild);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 8);
            }
            test.ok(success, 'throw_NOT_FOUND_ERR');
        }

        test.done();
    },


    /**
     *
     The "getAttributes()" method invoked on a Text
     Node returns null.

     Retrieve the Text node from the last child of the
     first employee and invoke the "getAttributes()" method
     on the Text Node.  It should return null.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1312295772
     */
    nodetextnodeattribute: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddr;
        var textNode;
        var attrList;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        testAddr = elementList.item(0);
        textNode = testAddr.firstChild;

        attrList = textNode.attributes;

        test.equal(attrList, null, 'nodeTextNodeAttributesAssert1');

        test.done();
    },

    /**
     *

     The string returned by the "getNodeName()" method for a

     Text Node is "#text".



     Retrieve the Text Node from the last child of the

     first employee and check the string returned

     by the "getNodeName()" method.   It should be equal to

     "#text".


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
     */
    nodetextnodename: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddr;
        var textNode;
        var textName;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        testAddr = elementList.item(0);
        textNode = testAddr.firstChild;

        textName = textNode.nodeName;

        test.equal(textName, "#text", 'nodeTextNodeNameAssert1');

        test.done();
    },

    /**
     *

     The "getNodeType()" method for a Text Node

     returns the constant value 3.



     Retrieve the Text node from the last child of

     the first employee and invoke the "getNodeType()"

     method.   The method should return 3.


     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
     */
    nodetextnodetype: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddr;
        var textNode;
        var nodeType;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        testAddr = elementList.item(0);
        textNode = testAddr.firstChild;

        nodeType = textNode.nodeType;

        test.equal(nodeType, 3, 'nodeTextNodeTypeAssert1');

        test.done();
    },

    /**
     *
     The string returned by the "getNodeValue()" method for a
     Text Node is the content of the Text node.

     Retrieve the Text node from the last child of the first
     employee and check the string returned by the
     "getNodeValue()" method.   It should be equal to
     "1230 North Ave. Dallas, Texas 98551".

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     */
    nodetextnodevalue: function(test) {
        var success;
        var doc;
        var elementList;
        var testAddr;
        var textNode;
        var textValue;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        testAddr = elementList.item(0);
        textNode = testAddr.firstChild;

        textValue = textNode.nodeValue;

        test.equal(textValue, "1230 North Ave. Dallas, Texas 98551", 'nodeTextNodeValueAssert1');

        test.done();
    },

    /**
     *
     An element is created, setNodeValue is called with a non-null argument, but getNodeValue
     should still return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
     */
    nodevalue01: function(test) {
        var success;
        var doc;
        var newNode;
        var newValue;

        doc = buildStaffDocument();
        newNode = doc.createElement("address");
        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'initiallyNull');
        newNode.nodeValue = "This should have no effect";

        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'nullAfterAttemptedChange');

        test.done();
    },

    /**
     *
     An comment is created, setNodeValue is called with a non-null argument, but getNodeValue
     should still return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
     */
    nodevalue02: function(test) {
        var success;
        var doc;
        var newNode;
        var newValue;

        doc = buildStaffDocument();
        newNode = doc.createComment("This is a new Comment node");
        newValue = newNode.nodeValue;

        test.equal(newValue, "This is a new Comment node", 'initial');
        newNode.nodeValue = "This should have an effect";

        newValue = newNode.nodeValue;

        test.equal(newValue, "This should have an effect", 'afterChange');

        test.done();
    },


    /**
     *
     An document type accessed, setNodeValue is called with a non-null argument, but getNodeValue
     should still return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A31
     */
    nodevalue04: function(test) {
        var success;
        var doc;
        var newNode;
        var newValue;

        doc = buildStaffDocument();
        newNode = doc.doctype;

        test.notEqual(newNode, null, 'docTypeNotNull');
        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'initiallyNull');
        newNode.nodeValue = "This should have no effect";

        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'nullAfterAttemptedChange');

        test.done();
    },

    /**
     *
     A document fragment is created, setNodeValue is called with a non-null argument, but getNodeValue
     should still return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
     */
    nodevalue05: function(test) {
        var success;
        var doc;
        var newNode;
        var newValue;

        doc = buildStaffDocument();
        newNode = doc.createDocumentFragment();
        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'initiallyNull');
        newNode.nodeValue = "This should have no effect";

        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'nullAfterAttemptedChange');

        test.done();
    },

    /**
     *
     An document is accessed, setNodeValue is called with a non-null argument, but getNodeValue
     should still return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
     */
    nodevalue06: function(test) {
        var success;
        var newNode;
        var newValue;
        newNode = buildStaffDocument();
        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'initiallyNull');
        newNode.nodeValue = "This should have no effect";

        newValue = newNode.nodeValue;

        test.equal(newValue, null, 'nullAfterAttemptedChange');

        test.done();
    },


    /**
     *
     An processing instruction is created, setNodeValue is called with a non-null argument, but getNodeValue
     should still return null.

     * @author Curt Arnold
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1004215813
     */
    nodevalue09: function(test) {
        var success;
        var doc;
        var newNode;
        var newValue;

        doc = buildStaffDocument();
        newNode = doc.createProcessingInstruction("TARGET","DATA");
        newValue = newNode.nodeValue;

        test.equal(newValue, "DATA", 'initial');
        newNode.nodeValue = "This should have an effect";

        newValue = newNode.nodeValue;

        test.equal(newValue, "This should have an effect", 'after');

        test.done();
    },


    /**
     *
     The "getData()" method returns the content of the
     processing instruction.  It starts at the first non
     white character following the target and ends at the
     character immediately preceding the "?>".

     Retrieve the ProcessingInstruction node located
     immediately after the prolog.  Create a nodelist of the
     child nodes of this document.  Invoke the "getData()"
     method on the first child in the list. This should
     return the content of the ProcessingInstruction.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-837822393
     */
    processinginstructiongetdata: function(test) {
        var success;
        var doc;
        var childNodes;
        var piNode;
        var data;

        doc = buildStaffDocument();
        childNodes = doc.childNodes;

        piNode = childNodes.item(0);
        data = piNode.data;

        test.equal(data, "PIDATA", 'processinginstructionGetTargetAssert');

        test.done();
    },

    /**
     *
     The "getTarget()" method returns the target of the
     processing instruction.  It is the first token following
     the markup that begins the processing instruction.

     Retrieve the ProcessingInstruction node located
     immediately after the prolog.  Create a nodelist of the
     child nodes of this document.  Invoke the "getTarget()"
     method on the first child in the list. This should
     return the target of the ProcessingInstruction.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1478689192
     */
    processinginstructiongettarget: function(test) {
        var success;
        var doc;
        var childNodes;
        var piNode;
        var target;

        doc = buildStaffDocument();
        childNodes = doc.childNodes;

        piNode = childNodes.item(0);
        target = piNode.target;

        test.equal(target, "TEST-STYLE", 'processinginstructionGetTargetAssert');

        test.done();
    },

    /**
     *
     The "splitText(offset)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset is
     negative.

     Retrieve the textual data from the second child of the
     third employee and invoke the "splitText(offset)" method.
     The desired exception should be raised since the offset
     is a negative number.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-38853C1D')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     */
    textindexsizeerrnegativeoffset: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var textNode;
        var splitNode;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(2);
        textNode = nameNode.firstChild;


        {
            success = false;
            try {
                splitNode = textNode.splitText(-69);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throws_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     The "splitText(offset)" method raises an
     INDEX_SIZE_ERR DOMException if the specified offset is
     greater than the number of characters in the Text node.

     Retrieve the textual data from the second child of the
     third employee and invoke the "splitText(offset)" method.
     The desired exception should be raised since the offset
     is a greater than the number of characters in the Text
     node.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-38853C1D')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
     * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
     */
    textindexsizeerroffsetoutofbounds: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var textNode;
        var splitNode;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(2);
        textNode = nameNode.firstChild;


        {
            success = false;
            try {
                splitNode = textNode.splitText(300);
            }
            catch(ex) {
                success = (typeof(ex.code) != 'undefined' && ex.code == 1);
            }
            test.ok(success, 'throw_INDEX_SIZE_ERR');
        }

        test.done();
    },

    /**
     *
     Retrieve the textual data from the last child of the
     second employee.   That node is composed of two
     EntityReference nodes and two Text nodes.   After
     the content node is parsed, the "address" Element
     should contain four children with each one of the
     EntityReferences containing one child.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-11C98490
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-745549614
     */
    textparseintolistofelements: function(test) {
        var success;
        var doc;
        var elementList;
        var addressNode;
        var childList;
        var child;
        var length;
        var value;
        var grandChild;
        var result = new Array();

        expectedNormal = new Array();
        expectedNormal[0] = "1900 Dallas Road";
        expectedNormal[1] = " Dallas, ";
        expectedNormal[2] = "Texas";
        expectedNormal[3] = "\n 98554";

        expectedExpanded = new Array();
        expectedExpanded[0] = "1900 Dallas Road Dallas, Texas\n 98554";


        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        addressNode = elementList.item(1);
        childList = addressNode.childNodes;

        length = childList.length;

        for(var indexN1007F = 0;indexN1007F < childList.length; indexN1007F++) {
            child = childList.item(indexN1007F);
            value = child.nodeValue;


            if(

                (value == null)

            ) {
                grandChild = child.firstChild;

                test.notEqual(grandChild, null, 'grandChildNotNull');
                value = grandChild.nodeValue;

                result[result.length] = value;

            }

            else {
                result[result.length] = value;

            }

        }

        if(
            (4 == length)
        ) {
            test.equal(result.join(), expectedNormal.join(), 'assertEqNormal');

        }

        else {
            test.equal(result.join(), expectedExpanded.join(), 'assertEqCoalescing');

        }

        test.done();
    },

    /**
     *
     The "splitText(offset)" method returns the new Text node.

     Retrieve the textual data from the last child of the
     first employee and invoke the "splitText(offset)" method.
     The method should return the new Text node.   The offset
     value used for this test is 30.   The "getNodeValue()"
     method is called to check that the new node now contains
     the characters at and after position 30.
     (Starting count at 0)

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
     */
    textsplittextfour: function(test) {
        var success;
        var doc;
        var elementList;
        var addressNode;
        var textNode;
        var splitNode;
        var value;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("address");
        addressNode = elementList.item(0);
        textNode = addressNode.firstChild;

        splitNode = textNode.splitText(30);
        value = splitNode.nodeValue;

        test.equal(value, "98551", 'textSplitTextFourAssert');

        test.done();
    },


    /**
     *
     The "splitText(offset)" method breaks the Text node into
     two Text nodes at the specified offset keeping each node
     as siblings in the tree.

     Retrieve the textual data from the second child of the
     third employee and invoke the "splitText(offset)" method.
     The method splits the Text node into two new sibling
     Text nodes keeping both of them in the tree.   This test
     checks the "nextSibling()" method of the original node
     to ensure that the two nodes are indeed siblings.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
     */
    textsplittextone: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var textNode;
        var splitNode;
        var secondPart;
        var value;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(2);
        textNode = nameNode.firstChild;

        splitNode = textNode.splitText(7);
        secondPart = textNode.nextSibling;

        value = secondPart.nodeValue;

        test.equal(value, "Jones", 'textSplitTextOneAssert');

        test.done();
    },

    /**
     *
     After the "splitText(offset)" method breaks the Text node
     into two Text nodes, the new Text node contains all the
     content at and after the offset point.

     Retrieve the textual data from the second child of the
     third employee and invoke the "splitText(offset)" method.
     The new Text node should contain all the content
     at and after the offset point.   The "getNodeValue()"
     method is called to check that the new node now contains
     the characters at and after position seven.
     (Starting count at 0)

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
     */
    textsplittextthree: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var textNode;
        var splitNode;
        var value;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(2);
        textNode = nameNode.firstChild;

        splitNode = textNode.splitText(6);
        value = splitNode.nodeValue;

        test.equal(value, " Jones", 'textSplitTextThreeAssert');

        test.done();
    },

    /**
     *
     After the "splitText(offset)" method breaks the Text node
     into two Text nodes, the original node contains all the
     content up to the offset point.

     Retrieve the textual data from the second child of the
     third employee and invoke the "splitText(offset)" method.
     The original Text node should contain all the content
     up to the offset point.   The "getNodeValue()" method
     is called to check that the original node now contains
     the first five characters.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
     */
    textsplittexttwo: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var textNode;
        var splitNode;
        var value;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(2);
        textNode = nameNode.firstChild;

        splitNode = textNode.splitText(5);
        value = textNode.nodeValue;

        test.equal(value, "Roger", 'textSplitTextTwoAssert');

        test.done();
    },

    /**
     *
     If there is not any markup inside an Element or Attr node
     content, then the text is contained in a single object
     implementing the Text interface that is the only child
     of the element.

     Retrieve the textual data from the second child of the
     third employee.   That Text node contains a block of
     multiple text lines without markup, so they should be
     treated as a single Text node.   The "getNodeValue()"
     method should contain the combination of the two lines.

     * @author NIST
     * @author Mary Brady
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1312295772
     * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
     */
    textwithnomarkup: function(test) {
        var success;
        var doc;
        var elementList;
        var nameNode;
        var nodeV;
        var value;

        doc = buildStaffDocument();
        elementList = doc.getElementsByTagName("name");
        nameNode = elementList.item(2);
        nodeV = nameNode.firstChild;

        value = nodeV.nodeValue;

        test.equal(value, "Roger\n Jones", 'textNodeValue');

        test.done();
    },



    /*
      splitText

      Breaks this Text node into two Text nodes at the specified offset, keeping both in
      the tree as siblings. This node then only contains all the content up to the offset
      point. And a new Text node, which is inserted as the next sibling of this node,
      contains all the content at and after the offset point

      This test ensures that the new text node is inserted at the correct location. This
      test does not actually test the splitText offsets and other behavior as that is
      handled in previous tests.

    */
    maintainsplittextlocation: function(test) {
        var success, children, firstTextNode;

        var doc = buildStaffDocument();
        var splitTextTest   = doc.createElement("splitTextTest");
        splitTextTest.appendChild(doc.createTextNode("Split me"));
        splitTextTest.appendChild(doc.createElement("last"));
        doc.documentElement.appendChild(splitTextTest);

        children = doc.getElementsByTagName('splitTextTest').item(0).childNodes;
        firstTextNode = children.item(0);
        test.equal(children.length, 2, 'Original children count should be 2');
        children.item(0).splitText('5');

        test.equal(children.length, 3, 'After split, the children count should be 3');
        test.equal(children.item(children.length-1).nodeType, doc.ELEMENT_NODE, 'After split, the last child should be an ELEMENT_NODE');
        test.equal(children.item(0), firstTextNode, 'After split the first child should still be the same object as before');
        test.equal(children.item(1).nodeType, doc.TEXT_NODE, 'After split the second child should be a text node');
        test.done();
    },
    
    allow_empty_nodelists : function(test) {
        var doc = buildStaffDocument();
        var element = doc.createElement('test');
        test.equal(element.children.length, 0);
        test.done();
    }
});