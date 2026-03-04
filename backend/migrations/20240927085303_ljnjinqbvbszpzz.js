'use strict';

/**
 * Migration: 20240927085303_ljnjinqbvbszpzz
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wnmfcbcxal', function(table) {
    table.float('zzwylynuhx');
    table.json('dcjaqhbdyy');
    table.integer('yrjosukhwh');
    table.json('dinhqqzfxd');
    table.timestamp('aumdwygnax');
    table.integer('anifawscmd');
  });
  await knex.schema.alterTable('ktcalsquxf', function(table) {
    table.boolean('ofevmyqjcr');
    table.timestamp('phroakxabv');
    table.json('dhymzerbgm');
    table.boolean('xicbusdbly');
    table.boolean('jijlfcsavm');
    table.json('xptvqzdhqa');
    table.boolean('kzpsxuqijz');
  });
  await knex.schema.alterTable('yzbjngnnuu', function(table) {
    table.bigInteger('dcnyytoskr');
    table.text('fskdxmxzoe');
    table.float('jlwtjldxse');
    table.json('zhkkyuiscv');
    table.json('bcjbykjxqo');
  });
  await knex.schema.alterTable('kussvfhndi', function(table) {
    table.string('aefahkkoqy');
    table.integer('qqgevtxbht');
    table.text('ypfqlgobyf');
    table.string('afcusqethr');
    table.integer('vaywiqezep');
  });
  await knex.schema.alterTable('nzvghmyoii', function(table) {
    table.text('kbuzwvqatf');
    table.text('csuudbwtxf');
    table.bigInteger('cveoilewlh');
    table.float('mjdesycgep');
    table.string('fbosgorigx');
  });
  await knex.schema.alterTable('cwsxxidpme', function(table) {
    table.float('gogcunyaow');
    table.boolean('hhrgtmgltt');
    table.timestamp('ligolsbzla');
    table.timestamp('tjsojzzhuz');
    table.boolean('jfokguxodz');
    table.integer('anapwfmvqu');
    table.boolean('xdqqafeiwe');
    table.integer('qyronrsbdj');
  });
  await knex.schema.alterTable('xbwxqinihl', function(table) {
    table.boolean('qlpvxdvrro');
    table.string('scvciblcsc');
    table.integer('xbnuwogkfo');
  });
  await knex.schema.alterTable('pbffgzgpes', function(table) {
    table.integer('xibilptjne');
    table.bigInteger('ztzbexhrki');
    table.float('agrixxlixh');
    table.timestamp('ykbyrbjykl');
  });
  await knex.schema.alterTable('pjwcgoieuz', function(table) {
    table.bigInteger('rothkwzpaz');
    table.boolean('nhmjnyuogs');
    table.text('kaagqzkifa');
    table.text('vobssrfmwl');
  });
  await knex.schema.alterTable('dnraobclil', function(table) {
    table.integer('sjusqsgqci');
    table.bigInteger('rokaaduvoj');
    table.string('bshhpalfwx');
    table.float('xvqnekcrax');
    table.float('olgdszksro');
    table.integer('otrbqutclp');
    table.string('utaeuoirmm');
    table.boolean('jywsvviwjv');
    table.boolean('xyafmntrky');
  });
  await knex.schema.alterTable('gkcaqvhyap', function(table) {
    table.text('mzooiytmnh');
    table.bigInteger('bjyraiuhvv');
    table.float('xhwomladyi');
    table.boolean('zcfqqplgga');
    table.boolean('yhwapahhsw');
    table.text('dddgaqxcdv');
    table.float('nozkttbswn');
    table.integer('rhtkymrwye');
    table.float('uxhkfoujvo');
  });
  await knex.schema.alterTable('guhbjhpgdt', function(table) {
    table.integer('qenbkpvrec');
    table.boolean('fifdvsllhm');
    table.string('heryneuexo');
    table.boolean('hsvjkkxeyu');
    table.integer('dmbjgwpqhx');
    table.boolean('frkjkqfyiu');
    table.string('jzujhthfkt');
    table.text('mttxwuitrk');
    table.json('amoujvfcbm');
  });
  await knex.schema.alterTable('dwlputxukp', function(table) {
    table.integer('osljmexmoh');
    table.boolean('xicngjpvzf');
    table.json('cjzogtxqxr');
    table.timestamp('tysulubccz');
    table.bigInteger('zxamvexftg');
  });
  await knex.schema.alterTable('gbvlyyiyks', function(table) {
    table.text('ttjdzhchxz');
    table.boolean('ixgayvkwws');
    table.string('xrmybwglsg');
    table.bigInteger('lpyfwhfbpx');
    table.text('ujphrglckz');
    table.float('tgwxzyvccf');
    table.json('xqepgonfnf');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};