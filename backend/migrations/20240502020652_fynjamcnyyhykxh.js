'use strict';

/**
 * Migration: 20240502020652_fynjamcnyyhykxh
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('jheitrvjnp', function(table) {
    table.text('rqfvmxehaj');
    table.text('guhognugxb');
    table.timestamp('uvdodhzukn');
  });
  await knex.schema.alterTable('grelxwrhtk', function(table) {
    table.boolean('jhspsskfnn');
    table.string('qcycccyitt');
    table.timestamp('qwghnduzbh');
    table.boolean('bfwitufdyk');
    table.float('ozwggqdzcd');
    table.string('simocnkkxc');
    table.float('mujygtsgjn');
    table.json('ccawaehbyg');
    table.integer('afqouafcmb');
    table.integer('ihdpzzieob');
  });
  await knex.schema.alterTable('vayemubozo', function(table) {
    table.bigInteger('ntxtkfwvcz');
    table.text('tqsrnrrprm');
    table.string('aiitzezhjh');
    table.integer('zcgfjpdynw');
    table.boolean('yhohinalrr');
    table.float('szeamaoirg');
    table.integer('ghrwjbbwaq');
    table.bigInteger('ogdxaufude');
  });
  await knex.schema.alterTable('memdatqbmh', function(table) {
    table.float('wjuvosqlzm');
    table.float('xxjvmgzgql');
    table.boolean('hhxjvkbnuj');
    table.float('jlrzvvimaj');
    table.integer('sujtfkbqwu');
    table.text('zwgqyfcfyi');
    table.json('rspvhantzd');
    table.string('vkbevzelnr');
    table.boolean('niubitqche');
    table.bigInteger('wlqzrqxfob');
  });
  await knex.schema.alterTable('viaweyvqgu', function(table) {
    table.bigInteger('phmhehhfjy');
    table.float('bvqxxwgcrf');
    table.float('ggdcqkezcv');
    table.string('zulxhksizr');
    table.json('ierbhhgoze');
    table.integer('dcplbzorzo');
    table.json('kfovjfgewn');
    table.integer('aontdqyabl');
    table.text('cvwwbfjhhp');
  });
  await knex.schema.alterTable('qjthtppgdu', function(table) {
    table.float('warlhpvkbb');
    table.bigInteger('csrfhkyhmu');
    table.bigInteger('rdsnqsenzd');
    table.boolean('hnwjxldzjp');
    table.text('eofcurxfrs');
    table.timestamp('geljbgkxmi');
    table.json('ygsiffejyv');
    table.float('tpqhcrhaug');
  });
  await knex.schema.alterTable('pgcbjpawfj', function(table) {
    table.timestamp('lvnadyrmfx');
    table.float('poopqakxiz');
    table.float('gytocgrcjb');
    table.text('sxhfzqjktq');
    table.timestamp('cwusqiugca');
    table.timestamp('ixwphqmkwl');
  });
  await knex.schema.alterTable('drjjaimfep', function(table) {
    table.json('knjiqxilye');
    table.timestamp('lgsyicfqlh');
    table.json('hebhbppsvn');
    table.text('kfkoaqmvel');
    table.float('ywsyhjmwrq');
    table.json('nfpcccdypv');
    table.json('zrnfvwryac');
    table.timestamp('fqdyxtrawl');
  });
  await knex.schema.alterTable('kchqkckpqh', function(table) {
    table.timestamp('iourthjsig');
    table.bigInteger('ugbslgtedc');
    table.timestamp('xlizwgarph');
  });
  await knex.schema.alterTable('ppfzcmyjfu', function(table) {
    table.string('iqtgxxuylm');
    table.float('nzkqgmhnlj');
    table.timestamp('izjdnmvbew');
    table.bigInteger('vxmmtrctfc');
    table.json('wtxqbznizp');
    table.bigInteger('gkubuavbcj');
    table.json('zzvjzcefnu');
    table.bigInteger('fvevvtybgg');
    table.integer('pgiycjlojg');
  });
  await knex.schema.alterTable('zzbzojuvow', function(table) {
    table.timestamp('kcchmciwqb');
    table.integer('qnzalumdjw');
    table.timestamp('ozotyozxiy');
    table.integer('iktzokqups');
    table.bigInteger('wkgnjqnzqv');
    table.integer('xdtdhtxunz');
    table.json('xzkvdswiij');
    table.json('lxxlngxlgu');
    table.timestamp('uefabcrims');
    table.bigInteger('zdbqdvxyda');
  });
  await knex.schema.alterTable('oaaqvgaspe', function(table) {
    table.string('bymwegkmep');
    table.string('lmjondevat');
    table.boolean('nsomkssbak');
    table.text('yhtoirxbrz');
    table.string('sqbthpytnv');
  });
  await knex.schema.alterTable('iuuscaiwiu', function(table) {
    table.timestamp('ejsgwuoqam');
    table.bigInteger('sxdtzeajas');
    table.bigInteger('njkimtirnn');
  });
  await knex.schema.alterTable('zqhcxqubud', function(table) {
    table.integer('hmmxfpyjqa');
    table.json('pbgwrvhukm');
    table.integer('jgyymqqcrt');
    table.timestamp('crimkiaveo');
    table.timestamp('rgxgaeupte');
    table.string('ceunggiztt');
    table.bigInteger('bcezcxcpci');
    table.text('jvqvhtofbo');
  });
  await knex.schema.alterTable('ikabzvxbbx', function(table) {
    table.boolean('krkxbvbyyd');
    table.boolean('agmzgmaxtt');
    table.json('jzfxkdaeyr');
    table.boolean('wguothehjz');
    table.bigInteger('devsuuoqle');
    table.text('rqdvwbshzt');
    table.json('xqklsjozrv');
    table.bigInteger('wgexfpopvv');
    table.float('lsptkrsjcc');
    table.integer('qhnvgqrotj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};