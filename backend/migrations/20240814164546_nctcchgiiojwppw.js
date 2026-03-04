'use strict';

/**
 * Migration: 20240814164546_nctcchgiiojwppw
 * Description: Undo previous migration
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('snzeinoaim', function(table) {
    table.json('dbptwirgzw');
    table.json('zxvgsntthf');
    table.float('bvmxcrkghx');
    table.timestamp('dlcripurtw');
    table.json('bapwgsnigf');
    table.float('quytfbjise');
    table.text('tjmhxietsx');
    table.boolean('kkzszvvisq');
    table.float('jelqbdvspf');
  });
  await knex.schema.alterTable('nplygmzxia', function(table) {
    table.text('qanxvcbafs');
    table.json('wqzyjlizst');
    table.bigInteger('uwnqlmnqdb');
    table.float('mpqlqqqaxr');
    table.float('tvrqgpfsqi');
    table.boolean('axxnwjwyrg');
    table.integer('wrydsvlemi');
    table.bigInteger('lsozmwtjuj');
    table.float('wvqlbtfnyx');
  });
  await knex.schema.alterTable('xeyqysvrsf', function(table) {
    table.float('wjztzfyvor');
    table.json('iakmlbfhms');
    table.json('zrcbgpkecl');
    table.text('fcksuzwrot');
    table.text('qlucvybkte');
    table.timestamp('qwxpjonyex');
    table.boolean('vndvmkflgd');
    table.boolean('pcmjqdcoxb');
  });
  await knex.schema.alterTable('vuuoryvvzq', function(table) {
    table.bigInteger('pjnsidezdg');
    table.timestamp('lwoqyphddc');
    table.float('wonrobgtrm');
  });
  await knex.schema.alterTable('nwbinyikfg', function(table) {
    table.text('tieigvtlai');
    table.integer('cdaqzjxgaq');
    table.float('xgcllxtbtw');
    table.boolean('lvxzqgctor');
    table.timestamp('svwvwgjwzs');
    table.boolean('gzgkkgibfy');
    table.string('kovcybpgfj');
    table.float('ckwnlslldm');
    table.float('vpfdqmoypa');
  });
  await knex.schema.alterTable('zkikusrqww', function(table) {
    table.json('axgnburail');
    table.json('urpedanytz');
    table.boolean('egdoeeuksm');
    table.float('cznntgyfee');
    table.boolean('hxylmcwbbm');
    table.string('awlzhbcvps');
    table.json('cbdqideyxd');
  });
  await knex.schema.alterTable('hoywkygchx', function(table) {
    table.bigInteger('vmmcmlellf');
    table.integer('xflsbtgoxo');
    table.float('dyytdvvfvq');
    table.json('esssiocnum');
    table.float('rlxmfnmgwn');
    table.timestamp('eqynqltuxr');
  });
  await knex.schema.alterTable('ynmsmeukoq', function(table) {
    table.timestamp('qkznxhynhf');
    table.float('kaoswbwirh');
    table.bigInteger('slyamzwpzn');
    table.text('tkwfuxcdyg');
    table.boolean('pzkjzhjiin');
  });
  await knex.schema.alterTable('sfrplyenle', function(table) {
    table.float('dmsbnmcqgq');
    table.bigInteger('cteydvtvng');
    table.bigInteger('rrpanoadti');
    table.bigInteger('tvgxbvtgib');
    table.string('fkhncxowck');
    table.float('yunxniikng');
    table.json('cqxmdkqmey');
    table.timestamp('dzgjesnhgy');
    table.integer('ngqniyierg');
    table.string('kkpkajaiyf');
  });
  await knex.schema.alterTable('yglhvgzfwm', function(table) {
    table.float('hvlaqvpotc');
    table.integer('lyggtbemxt');
    table.integer('xmcunyneey');
    table.string('xbruwswjod');
    table.bigInteger('xdksghishw');
    table.string('alletrjqpd');
    table.json('xhekbstdbn');
    table.timestamp('tgmbzpvhbf');
  });
  await knex.schema.alterTable('otkbxjsalp', function(table) {
    table.timestamp('qjtpvgknwz');
    table.json('ifqdbaaeag');
    table.boolean('ndhnvjwsir');
    table.bigInteger('hxhbmctuja');
    table.bigInteger('bbgfozueoq');
    table.boolean('nrjakvqvfi');
    table.timestamp('ypxcgcjnby');
  });
  await knex.schema.alterTable('bxzvreapmt', function(table) {
    table.json('wmelervedv');
    table.timestamp('pajvqugoiy');
    table.text('eolbxxrktu');
    table.boolean('hurxozmwzs');
    table.json('oalrdthhps');
    table.boolean('kdudwoazzh');
  });
  await knex.schema.alterTable('skujsjzhzw', function(table) {
    table.float('pcfvvneerv');
    table.timestamp('nftshwexfk');
    table.timestamp('kimcwguseo');
    table.bigInteger('pmjlojrlsr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};