/**
 * Created with IntelliJ IDEA.
 * User: wykeosk
 * Date: 2013-03-23
 * Time: 11:26
 * To change this template use File | Settings | File Templates.
 */
read = (function(){ var oldRead = read; return function(prompt) { return String(oldRead(prompt)) } })();

