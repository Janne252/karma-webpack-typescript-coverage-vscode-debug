import 'jasmine';
import should from 'should';

import Foo from '../src/foo';

describe('foo', () => {
    it('bar', () => {
        should.equal(new Foo('bar').name, 'bar');
    });
});